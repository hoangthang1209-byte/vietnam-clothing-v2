export default function MobileCTA() {
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-neutral-200 bg-white p-3 lg:hidden">
  
        <div className="grid grid-cols-3 gap-3">
  
          <a
            href="tel:0867401618"
            className="flex items-center justify-center rounded-full border border-black px-4 py-3 text-sm font-medium"
          >
            Call
          </a>
  
          <a
            href="https://wa.me/84867401618"
            target="_blank"
            className="flex items-center justify-center rounded-full border border-black px-4 py-3 text-sm font-medium"
          >
            WhatsApp
          </a>
  
          <button className="rounded-full bg-black px-4 py-3 text-sm font-medium text-white">
            Get Quote
          </button>
  
        </div>
  
      </div>
    );
  }