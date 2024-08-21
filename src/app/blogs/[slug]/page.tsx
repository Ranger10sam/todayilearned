import Navbar from "@/components/navbar";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBySlug(params.slug);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  // Type assertion for Title and Date properties
  const title = (post.properties.Title as { type: "title"; title: { plain_text: string }[] }).title[0]?.plain_text;
  const date = (post.properties.Date as { type: "date"; date: { start: string } }).date.start;

  return (
    <>
      <div className="max-w-3xl mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">
          {title || 'Untitled'}
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          {new Date(date).toLocaleDateString()}
        </p>
        <div
          className="prose pt-15"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </>
  );
}
