import type {
    ButtonHTMLAttributes,
    ReactNode,
  } from "react";
  
  type Props =
    ButtonHTMLAttributes<
      HTMLButtonElement
    > & {
  
      children:
        ReactNode;
  
      variant?:
        | "primary"
        | "secondary";
  
      size?:
        | "sm"
        | "md"
        | "lg";
    };
  
  export default function Button({
  
    children,
  
    variant =
      "primary",
  
    size =
      "md",
  
    className = "",
  
    ...props
  
  }: Props) {
  
    const variants = {
  
      primary:
        `
          bg-black
          text-white
          hover:scale-105
        `,
  
      secondary:
        `
          border
          border-black/10
          bg-white
          text-black
          hover:bg-black
          hover:text-white
        `,
    };
  
    const sizes = {
  
      sm:
        `
          px-4
          py-2
          text-sm
        `,
  
      md:
        `
          px-6
          py-3
        `,
  
      lg:
        `
          px-8
          py-4
          text-lg
        `,
    };
  
    return (
  
      <button
        className={`
          inline-flex
          items-center
          justify-center
          rounded-full
          font-medium
          transition
          duration-200
  
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
  
        {children}
  
      </button>
    );
  }``