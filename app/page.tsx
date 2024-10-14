import { PostTweet } from "./components/postTweet";
import { DropProfile } from "./components/profileClick";
import { Sidebar } from "./sidebar";

export default function Home() {
  return (
    <div className="">
      <Sidebar />
      <PostTweet />
      <DropProfile />
    </div>
  );
}
