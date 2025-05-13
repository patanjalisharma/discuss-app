import NewCommentForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import ShowPostDetail from "@/components/posts/show-post-detail";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

type ShowPostProps = {
  params: Promise<{ slug: string; postId: string }>;
};

const ShowPost: React.FC<ShowPostProps> = async ({ params }) => {
  const { slug, postId } = await params;
  return (
    <div className="bg-black text-white p-6 space-y-6 rounded-lg shadow-lg">
      <Link href={`/topic/${slug}`}>
        <Button className="bg-blue-700 hover:bg-blue-600 text-white cursor-pointer mb-2">
          <ChevronLeft />
          Back
        </Button>
      </Link>
      
      <Suspense>
        <ShowPostDetail postId={postId} />
      </Suspense>

      <div className="bg-black ">
        <NewCommentForm postId={postId} startOpen />
      </div>

      <div className="bg-zinc-800 rounded-lg p-6">
        <CommentList postId={postId} />
      </div>
    </div>
  );
};

export default ShowPost;
