import {
    MessageCircle,
  } from "lucide-react";
  
  export default function WhatsAppFloating() {
  
    return (
  
      <a
        href="https://wa.me/84918681878"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "
      >
  
        <MessageCircle
          className="
            h-8
            w-8
          "
        />
  
      </a>
    );
  }