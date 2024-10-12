/** @format */
import { Outlet } from "react-router-dom";
import Header from "../components/header";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className='text-center bg-lime-100 py-4'>
        This is our Footer
      </footer>
    </div>
  );
};

export default MainLayout;
