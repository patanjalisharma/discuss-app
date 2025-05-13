"use client";
import React, { useActionState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { createTopics } from "@/actions/create-topics";

const NewTopic = () => {
  const [formState, action] = useActionState(createTopics, { errors: {} });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">New Topic</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white rounded-lg border-none shadow-xl">
          <form action={action}>
            <DialogHeader>
              <DialogTitle>Create a Topic</DialogTitle>
              <DialogDescription>
                Write a new topic to start a discussion. Click save when you are done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <div>
                <Label htmlFor="name" className="text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {formState.errors.name && (
                <p className="text-sm text-red-500">{formState.errors.name}</p>
              )}
              <div>
                <Label htmlFor="description" className="text-lg">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  className="bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {formState.errors.description && (
                <p className="text-sm text-red-500">
                  {formState.errors.description}
                </p>
              )}
              {formState.errors.formError && (
                <p className="text-sm text-red-600">
                  {formState.errors.formError}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewTopic;
