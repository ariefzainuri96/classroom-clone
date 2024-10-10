import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { Toaster } from '@/components/ui/toaster';
import SideMenu from '@/components/side-menu';
import { Separator } from '@/components/ui/separator';

const MainLayout = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <div className='flex flex-col w-full h-full overflow-hidden'>
        <Navbar />
        <div className='flex flex-row flex-1 w-full overflow-hidden'>
          <SideMenu />
          <Separator
            orientation='vertical'
            className='hidden md:block'
          />
          <Outlet />
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default MainLayout;
