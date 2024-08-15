import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-dark-secondary hover:underline text-xl">{props.title}</h2>
      </Link>
      <p className="mt-4 text-dark-tertiary">
        {props.previewText}
      </p>
      <div className="mt-5 flex justify-between items-center">
        <p className="text-sm text-slate-400">{props.date}</p>
        <p className="text-slate-700">-{props.writtenBy}</p>
      </div>
    </div>
  );
};

export default PostPreview;