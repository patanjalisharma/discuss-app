import React from 'react';
import { Card, CardDescription, CardHeader } from '../ui/card';
import { postWithData } from '@/lib/query/post';
import { Button } from '../ui/button';
import Link from 'next/link';

type PostListProps = {
    fetchData: () => Promise<postWithData[]>
}

const PostList: React.FC<PostListProps> = async({ fetchData }) => {
    const posts = await fetchData();

  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post) => (
        <Card key={post.id} className="bg-zinc-900 border-none text-white rounded-xl shadow-lg">
          <CardHeader className='flex flex-col gap-2'>
            
            <div className="flex items-center justify-between">
              <h2 className='text-xl font-semibold'>{post?.title}</h2>
            </div>
            <div className='flex items-center justify-between gap-140'>
              <Link href={`/topic/${post?.topic?.slug}`}>
                <Button className=" cursor-pointer bg-blue-600 hover:bg-blue-700">View</Button>
              </Link>
            <CardDescription className=' text-sm text-gray-400'>
              <h1>{post?.user?.name}</h1>
              <h1>{post?._count?.comments} comments</h1>
            </CardDescription>
            </div>
            
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
