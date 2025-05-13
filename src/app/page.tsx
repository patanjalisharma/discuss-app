import { auth } from "@/auth";
import PostList from "@/components/posts/post-list";
import NewTopic from "@/components/topics/new-topic";
import { fetchTopPosts } from "@/lib/query/post";

export default async function Home () {
  const session = await auth();
  return (
    <div className="bg-black text-gray-100 min-h-screen py-8 px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome {session?.user?.name}</h1>
        <div className="bg-black rounded-xl shadow-lg overflow-hidden">
          <PostList fetchData={() => fetchTopPosts()} />
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-black ">
          <NewTopic />
        </div>
      </div>
    </div>
  );
}
