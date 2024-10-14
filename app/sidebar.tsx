import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-4 bg-gray-800 h-screen">
      <Button className="w-full justify-start">Home</Button>
      <Button className="w-full justify-start">Explore</Button>
      <Button className="w-full justify-start">Notification</Button>
      <Button className="w-full justify-start">Grok</Button>
      <Button className="w-full justify-start">Communities</Button>
      <Button className="w-full justify-start">Premium</Button>
      <Button className="w-full justify-start">Verified Orgs</Button>
      <Button className="w-full justify-start">Profile</Button>
      <Button className="w-full justify-start">More</Button>
    </div>
  );
};
