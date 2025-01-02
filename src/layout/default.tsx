import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutDefault = () => {
  return (
    <div className="bg-zinc-200 dark:bg-[#111A2D]">
      <div className="lg:max-w-6xl md:max-w-lg mx-auto py-4">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayoutDefault;
