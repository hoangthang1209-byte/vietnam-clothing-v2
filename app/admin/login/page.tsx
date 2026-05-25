export default function AdminLoginPage() {

    return (
  
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-neutral-50
          px-6
        "
      >
  
        <div
          className="
            w-full
            max-w-md
            rounded-[40px]
            bg-white
            p-10
            shadow-sm
          "
        >
  
          <div
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/40
            "
          >
  
            Vietnam Clothing
  
          </div>
  
          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
            "
          >
  
            Admin Login
  
          </h1>
  
          <form
            action="/api/admin/login"
            method="POST"
            className="
              mt-12
              grid
              gap-6
            "
          >
  
            <input
              type="email"
              name="email"
              placeholder="
                admin@email.com
              "
              className="
                w-full
                rounded-2xl
                border
                border-black/10
                px-5
                py-4
                outline-none
              "
            />
  
            <input
              type="password"
              name="password"
              placeholder="
                Password
              "
              className="
                w-full
                rounded-2xl
                border
                border-black/10
                px-5
                py-4
                outline-none
              "
            />
  
            <button
              type="submit"
              className="
                rounded-full
                bg-black
                px-8
                py-5
                text-sm
                font-medium
                text-white
              "
            >
  
              Login
  
            </button>
  
          </form>
  
        </div>
  
      </main>
    );
  }