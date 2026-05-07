import { createClient } from "../../lib/supabase/server"
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const handoutId = formData.get('handoutId') as string

    // Get handout details
    const { data: handout, error: handoutError } = await supabase
      .from('handouts')
      .select('*')
      .eq('id', handoutId)
      .single()

    if (handoutError || !handout) {
      return NextResponse.json({ error: 'Handout not found' }, { status: 404 })
    }

    // Track download in database
    await supabase
      .from('user_downloads')
      .insert({
        user_id: user.id,
        handout_id: handoutId,
        downloaded_at: new Date().toISOString()
      })

    // Increment download count
    await supabase
      .from('handouts')
      .update({ download_count: (handout.download_count || 0) + 1 })
      .eq('id', handoutId)

    // Get file from storage
    const { data: fileData, error: fileError } = await supabase
      .storage
      .from('handouts')
      .download(handout.file_url)

    if (fileError) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Return file for download
    const headersList = await headers()
    return new NextResponse(fileData, {
      headers: {
        'Content-Type': handout.file_type,
        'Content-Disposition': `attachment; filename="${handout.title}.${handout.file_type.split('/')[1]}"`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Download failed' }, { status: 500 })
  }
}