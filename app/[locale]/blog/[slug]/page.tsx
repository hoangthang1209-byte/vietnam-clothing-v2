import type {
    Metadata,
  } from "next";
  
  import { notFound }
  from "next/navigation";
  
  import {
    blogPosts,
  } from "@/data/blog";
  
  import ContentRenderer
  from "@/components/content/ContentRenderer";
  
  import RelatedPosts
  from "@/components/blog/RelatedPosts";
  
  type Props = {
    params:
      Promise<{
        locale: string;
        slug: string;
      }>;
  };
  
  export async function generateStaticParams() {
  
    return Object.keys(
      blogPosts
    ).map(
      (
        slug
      ) => ({
  
        slug,
      })
    );
  }
  
  export async function generateMetadata({
    params,
  }: Props): Promise<Metadata> {
  
    const {
      slug,
    } = await params;
  
    const post =
      blogPosts[
        slug
      ];
  
    if (
      !post
    ) {
  
      return {};
    }
  
    return {
  
      title:
        post.seoTitle,
  
      description:
        post.seoDescription,
  
      openGraph: {
  
        title:
          post.seoTitle,
  
        description:
          post.seoDescription,
  
        images: [
          post.coverImage,
        ],
      },
    };
  }
  
  export default async function BlogPostPage({
    params,
  }: Props) {
  
    const {
      slug,
    } = await params;
  
    const post =
      blogPosts[
        slug
      ];
  
    if (
      !post
    ) {
      notFound();
    }
  
    const articleSchema = {
  
      "@context":
        "https://schema.org",
  
      "@type":
        "Article",
  
      headline:
        post.title,
  
      description:
        post.excerpt,
  
      image:
        post.coverImage,
  
      author: {
  
        "@type":
          "Organization",
  
        name:
          post.author,
      },
  
      publisher: {
  
        "@type":
          "Organization",
  
        name:
          "Vietnam Clothing",
      },
  
      datePublished:
        post.publishedAt,
    };
  
    return (
  
      <main className="bg-white text-black">
  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                articleSchema
              ),
          }}
        />
  
        <section
          className="
            relative
            h-[70vh]
            overflow-hidden
            text-white
          "
        >
  
          <img
            src={
              post.coverImage
            }
            alt={
              post.title
            }
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />
  
          <div
            className="
              absolute inset-0
              bg-black/50
            "
          />
  
          <div
            className="
              relative
              mx-auto
              flex
              h-full
              max-w-5xl
              items-end
              px-6
              pb-20
            "
          >
  
            <div>
  
              <div
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-white/60
                "
              >
  
                {
                  post.category
                }
  
              </div>
  
              <h1
                className="
                  mt-6
                  text-6xl
                  font-semibold
                  leading-none
                  tracking-tight
                "
              >
  
                {
                  post.title
                }
  
              </h1>
  
              <div
                className="
                  mt-8
                  text-white/70
                "
              >
  
                {
                  post.author
                }
                {" · "}
                {
                  post.publishedAt
                }
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
        <section className="py-24">
  
          <div className="mx-auto max-w-4xl px-6">
  
            <ContentRenderer
              blocks={
                post.content
              }
            />
  
          </div>
  
        </section>
  
        <RelatedPosts
          currentSlug={
            post.slug
          }
        />
  
      </main>
    );
  }