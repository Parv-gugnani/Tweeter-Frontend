import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EveryDrop } from "./everDrop";

export function PostTweet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-500 hover:bg-blue-400">
          Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] rounded-lg p-6 bg-black text-white">
        <EveryDrop />
        <div className="grid gap-4 py-4">
          <Input
            id="tweetContent"
            placeholder="What is happening?!"
            className="bg-black text-white border-none outline-none"
          />
          <div className="flex justify-between text-sm text-blue-500">
            <span>Everyone can reply</span>
            <span>Drafts</span>
          </div>
        </div>
        {/* Icons (emulating the ones in the screenshot) */}
        <div className="flex items-center justify-between text-blue-500 mt-4">
          <div className="flex gap-2">
            <i className="fas fa-image"></i>
            <i className="fas fa-gif"></i>
            <i className="fas fa-chart-bar"></i>
            <i className="fas fa-smile"></i>
            <i className="fas fa-calendar-alt"></i>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <Button className="bg-blue-500 rounded-full px-4 py-2">
            Post Tweet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
