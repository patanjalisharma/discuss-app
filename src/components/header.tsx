import { Suspense } from "react";
import AuthHeader from "./auth-header";
import SearchInput from "./search-input";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="grid grid-cols-3 h-14 items-center px-6 bg-black text-white">
      <div className="flex justify-start  ">
        <MessageCircle className="mr-1"/>
        <Link href='/'><h1 className="font-bold text-xl"> DiscussApp</h1></Link>
      </div>
      <div className="flex justify-center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="flex justify-end gap-4">
        <AuthHeader />
      </div>
    </div>
  );
};

export default HeaderPage;
