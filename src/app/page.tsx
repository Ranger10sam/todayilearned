import Image from "next/image";
import Hero from '@/components/hero'
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/postPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <Hero />
      <div>
        <h1 className="text-3xl mb-5">Recently <span>I learn&apos;t...</span> </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
      </div>
    </>
  );
}
