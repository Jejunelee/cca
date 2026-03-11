export default function Stats() {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden">
      
      {/* Background with subtle parallax */}
      <div className="absolute inset-0 bg-black/90" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
        style={{ backgroundImage: "url('/landing/stats.png')" }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 text-center text-white">

          {/* Stat 1 */}
          <div className="group space-y-4 md:space-y-6">
            <div className="relative">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                60%
              </h2>
              {/* Decorative line */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              of guest complaints are <span className="font-semibold text-white">people-related</span>, not product-related.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group space-y-4 md:space-y-6">
            <div className="relative">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                70%
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              of employees in hospitality report <span className="font-semibold text-white">emotional exhaustion</span> at least once a week.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group space-y-4 md:space-y-6">
            <div className="relative">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent whitespace-nowrap">
                1 in 3
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              frontliners feel <span className="font-semibold text-white">recognized for great service</span>.
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}