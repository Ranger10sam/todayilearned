import { getNotionPosts } from "@/lib/notion";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const posts = await getNotionPosts(); // Use the correct function to fetch posts

  if (!posts || !Array.isArray(posts)) {
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug, // Ensure this key exists in your post object
  }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getNotionPosts(); // Adjust function name if needed

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.title}</h1>
        <p className="text-slate-400 mt-2">{post.date}</p>
      </div>

      <article className="prose">
        <p>{post.previewText}</p> {/* Or whatever content you want to display */}
      </article>
    </div>
  );
};

export default PostPage;
