import Image from "next/image";
import Hero from '@/components/hero'
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/postPreview";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function Home() {

  const posts = await fetchPages();
  
  /*
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  */
  return (
    <>
      <Hero />
      <div>
        <h1 className="text-3xl mb-5">Recently <span>I learn&apos;t...</span> </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
        {posts.results.map((post: any)=>{
          return(
            <div key={post.id}>
              <div
                className="border border-slate-300 p-4 rounded-md shadow-sm bg-white h-10dvh" 
              >                
                <Link
                  href={`/blogs/${post.properties.Slug.rich_text[0].plain_text}`}
                >
                  <h1 className="text-xl">
                    {post.properties.Title.title[0].plain_text}
                  </h1>
                  <p className="mt-4 text-sm text-dark-tertiary">
                    {post.properties.PreviewText.rich_text[0].plain_text}
                  </p>
                  <div className="mt-5 flex justify-between items-center gap-4">
                    <p className="text-sm text-slate-400 min-w-fit">{post.properties.Date.date.start}</p>
                    <div className="w-full h-full flex justify-end">
                      <div className="flex flex-wrap justify-end">
                        {post.properties.Tags.multi_select.map((tag: { name: string }, index: number) => (
                          <span key={index} className=" text-xs text-slate-400 w-fit border rounded-full mr-2 mb-2 pl-3 pr-3 pt-1 pb-1 shadow-sm">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}