import { PostTweet } from "./components/postTweet";
import { DropProfile } from "./components/profileClick";
import { Sidebar } from "./sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="w-1/5">
        <Sidebar />
      </div>

      <div className="w-3/5 flex flex-col items-center">
        <div className="w-full max-w-[600px] mt-6">
          <PostTweet />
        </div>
      </div>

      <div className="w-1/5 flex justify-end">
        <div className="mr-6 mt-6">
          <DropProfile />
        </div>
      </div>
    </div>
  );
}
