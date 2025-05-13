"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea"; 
import { useActionState } from "react";
import { createPost } from "@/actions/create-posts";
import Link from "next/link";

type CreatePostFormProps = {
    slug:string
}

const PostCreateForm : React.FC<CreatePostFormProps> = ({slug}) => {
    const [formState, action] = useActionState(createPost.bind(null, slug), {errors:{}})
  return (
    <>
    <Link href="/"><Button className="cursor-pointer bg-blue-600 hover:bg-blue-700">Home</Button></Link>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Create a Post</Button>
        
      </DialogTrigger>
      <DialogContent className="bg-zinc-800 border-none text-white sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a new post. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title" className="mb-2">Title</Label>
              <Input id="title" name="title" />
            </div>
            {formState.errors.title && <p className="text-sm text-red-600">{formState.errors.title}</p>}
            <div>
              <Label htmlFor="content" className="text-right  mb-2">
                Content
              </Label>
              <Textarea id="content" name="content" className="h-40 bg-zinc-800  overflow-y-auto" />
            </div>
            {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
            {formState.errors.formError && <div className="border border-red-600 bg-red-200 p-2 rounded">{formState.errors.formError}</div>}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 cursor-pointer">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};
export default PostCreateForm;