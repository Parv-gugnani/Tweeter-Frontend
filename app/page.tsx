import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import RightSidebar from "./Components/RightSidebar";

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <Feed />
      </div>
      <RightSidebar />
    </div>
  );
};

export default HomePage;
