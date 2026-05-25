import {
    notFound,
  } from "next/navigation";
  
  import {
    createClient,
  } from "@/lib/supabase/server";
  
  import BlogUpdateForm
  from "@/components/blog/BlogUpdateForm";
  
  type Props = {
  
    params: {
  
      id: string;
    };
  };
  
  export default async function EditBlogPage({
  
    params,
  
  }: Props) {
  
    const supabase =
      await createClient();
  
    const {
      data: blog,
    } = await supabase
  
      .from(
        "blogs"
      )
  
      .select("*")
  
      .eq(
        "id",
        params.id
      )
  
      .single();
  
    if (!blog) {
  
      notFound();
    }
  
    return (
  
      <main
        className="
          min-h-screen
          bg-neutral-100
          p-10
        "
      >
  
        <div
          className="
            mx-auto
            max-w-5xl
          "
        >
  
          <h1
            className="
              text-4xl
              font-black
              tracking-tight
            "
          >
  
            Edit Blog Post
  
          </h1>
  
          <div
            className="
              mt-10
            "
          >
  
            <BlogUpdateForm
              blog={blog}
            />
  
          </div>
  
        </div>
  
      </main>
    );
  }