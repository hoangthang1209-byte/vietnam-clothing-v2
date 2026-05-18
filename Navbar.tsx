export default function Navbar() {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="text-lg font-semibold tracking-wide">
            Vietnam Clothing
          </div>
  
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#">Uniforms</a>
            <a href="#">Merchandise</a>
            <a href="#">Corporate Gifts</a>
            <a href="#">Industries</a>
            <a href="#">Case Studies</a>
          </nav>
  
          <button className="rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800">
            Get Quote
          </button>
        </div>
      </header>
    );
  }