"use client";

type Props = {

  children:
    React.ReactNode;

  delay?: number;

  className?: string;
};

export default function Reveal({

  children,

  className,

}: Props) {

  return (

    <div
      className={
        className
      }
    >

      {children}

    </div>
  );
}