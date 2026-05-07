import { createClient } from '../lib/supabase/server'
import { redirect } from 'next/navigation'
import LogoutButton from '../components/landing/LogoutButton'
import { Download, FileText, BookOpen, Video, Award, TrendingUp, Search, Filter, Calendar } from 'lucide-react'

// Types for handouts
interface Handout {
  id: string
  title: string
  description: string
  file_url: string
  file_size: number
  file_type: string
  category: string
  download_count: number
  created_at: string
  thumbnail_url?: string
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch handouts from Supabase
  const { data: handouts, error } = await supabase
    .from('handouts')
    .select('*')
    .order('created_at', { ascending: false })

  // Fetch user's download history
  const { data: userDownloads } = await supabase
    .from('user_downloads')
    .select('handout_id')
    .eq('user_id', user.id)

  const downloadedHandoutIds = new Set(userDownloads?.map(d => d.handout_id))

  // Helper function to format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Get file icon based on type
  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return <FileText className="h-5 w-5 text-[#AFCFE4]" />
    if (fileType.includes('video')) return <Video className="h-5 w-5 text-[#AFCFE4]" />
    return <BookOpen className="h-5 w-5 text-[#AFCFE4]" />
  }

  const stats = {
    totalHandouts: handouts?.length || 0,
    totalDownloads: handouts?.reduce((sum, h) => sum + (h.download_count || 0), 0) || 0,
    userDownloads: userDownloads?.length || 0,
    categories: new Set(handouts?.map(h => h.category)).size || 0
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Original desktop layout preserved, responsive on mobile */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-[#AFCFE4]/10 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-[#AFCFE4]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-jost">Resource Hub</h1>
                <p className="hidden sm:block text-xs text-gray-500 font-jost">CCA Connect Educational Handouts & Materials</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600 font-jost">
                <Award className="h-4 w-4 text-[#AFCFE4]" />
                <span>{stats.userDownloads} downloads</span>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden md:block" />
              <span className="text-sm text-gray-600 font-jost hidden md:block">{user.email}</span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section - Compact */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-3 md:p-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 font-medium font-jost">Total Handouts</p>
                <p className="text-lg md:text-xl font-bold text-gray-900 mt-0.5 font-jost">{stats.totalHandouts}</p>
              </div>
              <div className="bg-[#AFCFE4]/10 rounded-lg md:rounded-xl p-1.5 md:p-2">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-[#AFCFE4]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-3 md:p-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 font-medium font-jost">Total Downloads</p>
                <p className="text-lg md:text-xl font-bold text-gray-900 mt-0.5 font-jost">{stats.totalDownloads.toLocaleString()}</p>
              </div>
              <div className="bg-[#AFCFE4]/10 rounded-lg md:rounded-xl p-1.5 md:p-2">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-[#AFCFE4]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-3 md:p-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 font-medium font-jost">Your Downloads</p>
                <p className="text-lg md:text-xl font-bold text-gray-900 mt-0.5 font-jost">{stats.userDownloads}</p>
              </div>
              <div className="bg-[#AFCFE4]/10 rounded-lg md:rounded-xl p-1.5 md:p-2">
                <Download className="h-4 w-4 md:h-5 md:w-5 text-[#AFCFE4]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-3 md:p-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 font-medium font-jost">Categories</p>
                <p className="text-lg md:text-xl font-bold text-gray-900 mt-0.5 font-jost">{stats.categories}</p>
              </div>
              <div className="bg-[#AFCFE4]/10 rounded-lg md:rounded-xl p-1.5 md:p-2">
                <Filter className="h-4 w-4 md:h-5 md:w-5 text-[#AFCFE4]" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section - Stack on mobile, row on desktop */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search handouts..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AFCFE4] focus:border-transparent text-gray-900 placeholder-gray-400 font-jost"
                id="searchInput"
              />
            </div>
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AFCFE4] focus:border-transparent text-gray-900 font-jost cursor-pointer hover:bg-gray-100 transition-colors">
              <option value="" className="bg-white text-gray-900">All Categories</option>
              <option value="Lecture Notes" className="bg-white text-gray-900">Lecture Notes</option>
              <option value="Assignments" className="bg-white text-gray-900">Assignments</option>
              <option value="Exam Prep" className="bg-white text-gray-900">Exam Prep</option>
              <option value="Tutorials" className="bg-white text-gray-900">Tutorials</option>
              <option value="Research" className="bg-white text-gray-900">Research Papers</option>
              <option value="Business Strategy" className="bg-white text-gray-900">Business Strategy</option>
            </select>
            <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AFCFE4] focus:border-transparent text-gray-900 font-jost cursor-pointer hover:bg-gray-100 transition-colors">
              <option value="newest" className="bg-white text-gray-900">Newest First</option>
              <option value="popular" className="bg-white text-gray-900">Most Downloaded</option>
              <option value="oldest" className="bg-white text-gray-900">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Handouts Grid - Original desktop grid preserved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {handouts?.map((handout) => (
            <div key={handout.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Thumbnail/Header */}
              <div className="h-32 bg-gradient-to-r from-[#AFCFE4]/20 to-[#AFCFE4]/5 relative">
                {handout.thumbnail_url ? (
                  <img src={handout.thumbnail_url} alt={handout.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {getFileIcon(handout.file_type)}
                    <span className="text-gray-600 text-sm ml-2 font-jost">{handout.file_type.toUpperCase()}</span>
                  </div>
                )}
                {downloadedHandoutIds.has(handout.id) && (
                  <div className="absolute top-3 right-3 bg-[#AFCFE4] text-white text-xs px-2 py-1 rounded-full font-jost font-medium">
                    Downloaded
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 flex-1 font-jost">
                    {handout.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 font-jost">
                  {handout.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-[#AFCFE4]/10 text-[#AFCFE4] font-jost">
                    {handout.category}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 font-jost">
                    {formatFileSize(handout.file_size)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-jost">
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{handout.download_count || 0} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(handout.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Download Button */}
                <form action="/api/download" method="POST" className="mt-2">
                  <input type="hidden" name="handoutId" value={handout.id} />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#AFCFE4] text-white rounded-xl hover:bg-[#b8d4ef] hover:text-gray-900 transition-all duration-200 font-jost font-medium group-hover:shadow-lg"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Handout</span>
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State - Light theme */}
        {(!handouts || handouts.length === 0) && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2 font-jost">No handouts available</h3>
            <p className="text-gray-500 font-jost">Check back later for educational materials.</p>
          </div>
        )}
      </div>
    </div>
  )
}