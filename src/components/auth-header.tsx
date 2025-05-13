'use client'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import { Separator } from "./ui/separator";
import { useSession } from "next-auth/react";

const AuthHeader = () => {
  const session = useSession();
  if (session.status === "loading") return null;

  let authContent: React.ReactNode;

  if (session?.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={session?.data?.user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="bg-zinc-900 text-gray-300 rounded-lg p-4 shadow-lg border-none">
          <h1 className="text-lg font-semibold">{session?.data?.user?.name}</h1>
          <Separator className="my-2" />
          <form action={signOut}>
            <Button className="w-full mt-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">
              <LogOut />
              Sign out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button variant="outline" className="text-black border-gray-600 cursor-pointer">
            Sign in
          </Button>
        </form>
        <form action={signIn}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Sign up
          </Button>
        </form>
      </>
    );
  }

  return authContent;
};

export default AuthHeader;
