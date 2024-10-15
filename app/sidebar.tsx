import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col  space-y-4 h-screen p-4 border-r border-gray-700">
      <Button className="text-whiterounded-high p-3 text-right">Home</Button>
      <Button className="text-white hover:bg-gray-600 rounded-md p-3 text-left">
        Explore
      </Button>
      <Button className="text-white rounded-md p-3 text-left">
        Notifications
      </Button>
      <Button className="text-white rounded-md p-3 text-left">Grok</Button>
      <Button className="text-white rounded-md p-3 text-left">
        Communities
      </Button>
      <Button className="text-white rounded-md p-3 text-left">Premium</Button>
      <Button className="text-white rounded-md p-3 text-left">
        Verified Orgs
      </Button>
      <Button className="text-white rounded-md p-3 text-left">Profile</Button>
      <Button className="text-white rounded-md p-3 text-left">More</Button>
    </div>
  );
};
