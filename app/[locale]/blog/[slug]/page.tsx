import Image
from "next/image";

import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import {
  createClient,
} from "@/lib/supabase/server";

import RelatedBlogs
from "@/components/blog/RelatedBlogs";

type Props = {

  params: {

    slug: string;
    locale: string;
  };
};

async function getBlog(
  slug: string
) {

  const supabase =
    await createClient();

  const {
    data,
  } = await supabase

    .from(
      "blogs"
    )

    .select("*")

    .eq(
      "slug",
      slug
    )

    .single();

  return data;
}

export async function generateMetadata({

  params,

}: Props): Promise<
  Metadata
> {

  const blog =
    await getBlog(
      params.slug
    );

  if (!blog) {

    return {

      title:
        "Blog Not Found",
    };
  }

  return {

    title:
      `${blog.title} | Vietnam Clothing`,

    description:
      blog.excerpt,

    openGraph: {

      title:
        blog.title,

      description:
        blog.excerpt,

      images: [

        {
          url:
            blog.image,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({

  params,

}: Props) {

  const blog =
    await getBlog(
      params.slug
    );

  if (!blog) {

    notFound();
  }

  const jsonLd = {

    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      blog.title,

    description:
      blog.excerpt,

    image: [

      blog.image,
    ],

    author: {

      "@type":
        "Organization",

      name:
        "Vietnam Clothing",
    },

    publisher: {

      "@type":
        "Organization",

      name:
        "Vietnam Clothing",
    },

    datePublished:
      blog.created_at,
  };

  return (

    <main
      className="
        bg-white
        pb-24
        pt-40
        text-black
      "
    >

      <script
        type="
          application/ld+json
        "
        dangerouslySetInnerHTML={{

          __html:
            JSON.stringify(
              jsonLd
            ),
        }}
      />

      <article
        className="
          mx-auto
          max-w-5xl
          px-6
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

          {
            blog.category
          }

        </div>

        <h1
          className="
            mt-6
            text-6xl
            font-black
            tracking-tight
          "
        >

          {
            blog.title
          }

        </h1>

        <p
          className="
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-black/60
          "
        >

          {
            blog.excerpt
          }

        </p>

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[40px]
          "
        >

          <Image
            src={
              blog.image
            }
            alt={
              blog.title
            }
            width={1600}
            height={900}
            className="
              aspect-[16/9]
              w-full
              object-cover
            "
          />

        </div>

        <div
          className="
            prose
            prose-neutral
            mt-20
            max-w-none
            prose-img:rounded-[32px]
          "

          dangerouslySetInnerHTML={{

            __html:
              blog.content,
          }}
        />

      </article>

      <RelatedBlogs
        currentSlug={
          blog.slug
        }
      />

    </main>
  );
}