import Link from "next/link";
import { BlogMetadata } from "./blogMetadata";

const BlogPreview = (props: BlogMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/blogs/${props.Slug}`}>
        <h2 className=" text-dark-secondary hover:underline text-xl">{props.Title}</h2>
      </Link>
      <p className="mt-4 text-dark-tertiary">
        {props.PreviewText}
      </p>
      <div className="mt-5 flex justify-between items-center">
        <p className="text-sm text-slate-400">{props.Date}</p>
      </div>
    </div>
  );
};

export default BlogPreview;