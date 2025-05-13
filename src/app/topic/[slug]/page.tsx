import PostCreateForm from "@/components/posts/create-post";
// import PostList from "@/components/posts/post-list";
import PostList2 from "@/components/posts/post-list2";
import { fetchPostBySlug } from "@/lib/query/post";
import React from "react";

type TopicShowPageProps = {
  params: Promise<{ slug: string }>;
};

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 bg-black text-white">
      <div className="col-span-3">
        <h1 className="font-bold mb-4 text-3xl text-white">{slug}</h1>
        <PostList2 fetchData={() => fetchPostBySlug(slug)} />
      </div>
      <div className="bg-black flex gap-2">
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
