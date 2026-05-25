type Props = {

    children:
      React.ReactNode;
  };
  
  export default function AdminLayout({
  
    children,
  
  }: Props) {
  
    return (
  
      <div
        className="
          min-h-screen
          bg-neutral-100
        "
      >
  
        {
          children
        }
  
      </div>
    );
  }