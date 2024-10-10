import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/google-classroom-ic.png';
import { FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import SideMenu from '../side-menu';
import { CustomBreadCrumb } from './custom-breadcrumb';
import { useState } from 'react';
import { GripIcon, PlusIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MenuItem, MenuItemProps } from './menu-item';
import { Separator } from '../ui/separator';
// import googleLogo from '../../assets/images/google-logo.png';
// import mapsLogo from '../../assets/images/google-maps-logo.png';
// import youtubeLogo from '../../assets/images/youtube-logo.jpg';
// import geminiLogo from '../../assets/images/google-gemini-logo.jpg';
// import newsLogo from '../../assets/images/google-news-logo.png';
// import gmailLogo from '../../assets/images/gmail-logo.png';
// import gmeetLogo from '../../assets/images/gmeet-logo.png';

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menus: MenuItemProps[] = [
    {
      title: 'Search',
      icon: logo,
    },
    {
      title: 'Maps',
      icon: logo,
    },
    {
      title: 'Youtube',
      icon: logo,
    },
    {
      title: 'Gemini',
      icon: logo,
    },
    {
      title: 'News',
      icon: logo,
    },
    {
      title: 'Gmail',
      icon: logo,
    },
    {
      title: 'Meet',
      icon: logo,
    },
    {
      title: 'Chat',
      icon: logo,
    },
    {
      title: 'Contact',
      icon: logo,
    },
    {
      title: 'Drive',
      icon: logo,
    },
    {
      title: 'Calendar',
      icon: logo,
    },
    {
      title: 'Play',
      icon: logo,
    },
    {
      title: 'Translate',
      icon: logo,
    },
    {
      title: 'Photos',
      icon: logo,
    },
    {
      title: 'My Ad Center',
      icon: logo,
    },
    {
      title: 'Chrome',
      icon: logo,
    },
    {
      title: 'Setting',
      icon: logo,
    },
  ];
  const anotherMenus: MenuItemProps[] = [
    {
      title: 'Finance',
      icon: logo,
    },
    {
      title: 'Docs',
      icon: logo,
    },
    {
      title: 'Sheets',
      icon: logo,
    },
    {
      title: 'Slides',
      icon: logo,
    },
    {
      title: 'Books',
      icon: logo,
    },
    {
      title: 'Keep',
      icon: logo,
    },
    {
      title: 'Classroom',
      icon: logo,
    },
    {
      title: 'Earth',
      icon: logo,
    },
    {
      title: 'Saved',
      icon: logo,
    },
    {
      title: 'Arts & Culture',
      icon: logo,
    },
    {
      title: 'Google Ads',
      icon: logo,
    },
    {
      title: 'Google One',
      icon: logo,
    },
    {
      title: 'Travel',
      icon: logo,
    },
    {
      title: 'Forms',
      icon: logo,
    },
    {
      title: 'Chrome Web Store',
      icon: logo,
    },
    {
      title: 'Password Manager',
      icon: logo,
    },
    {
      title: 'Google Analytics',
      icon: logo,
    },
  ];
  const location = useLocation();
  const pathList = location.pathname
    .split('/')
    .filter((item) => item !== '')
    .filter((item) => isNaN(parseInt(item)));

  return (
    <nav className='bg-white border-b'>
      <div className='flex flex-row items-center h-20 gap-4 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='block lg:hidden'>
          <Sheet
            open={sheetOpen}
            onOpenChange={setSheetOpen}
          >
            <SheetTrigger asChild>
              <FaBars
                size={20}
                className='text-gray-400 cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent
              side='left'
              overlay={false}
              primitiveClose={false}
              className='w-[300px] p-0'
            >
              <SideMenu
                forSheet={true}
                setOpen={setSheetOpen}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div
          onClick={() => {
            console.log('minimize side menu');
          }}
          className='hidden lg:block'
        >
          <FaBars
            size={20}
            className='text-gray-400 cursor-pointer'
          />
        </div>

        <div className='flex flex-row items-center flex-1 gap-4'>
          <Link
            className='flex items-center flex-shrink-0 group'
            to='/'
          >
            <img
              className='w-auto h-10'
              src={logo}
              alt='React Jobs'
            />
            <span className='hidden ml-2 text-2xl font-normal text-gray-500 group-hover:underline group-hover:text-blue-500 md:block'>
              Classroom
            </span>
          </Link>
          {pathList.length > 0 &&
            pathList.map((item, index) => {
              let path = item;

              if (item.includes('class')) {
                path = 'class';
              }

              return (
                <CustomBreadCrumb
                  key={index}
                  path={path}
                />
              );
            })}
        </div>
        <div className='flex flex-row items-center justify-end gap-6'>
          <DropdownMenu
            open={plusOpen}
            onOpenChange={setPlusOpen}
          >
            <DropdownMenuTrigger asChild>
              <PlusIcon
                className='text-gray-600 cursor-pointer'
                size={24}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();

                  setPlusOpen(false);
                }}
              >
                Join class
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();

                  setPlusOpen(false);
                }}
              >
                Create class
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Popover
            open={menuOpen}
            onOpenChange={setMenuOpen}
          >
            <PopoverTrigger>
              <GripIcon
                size={24}
                className='text-gray-600 cursor-pointer'
              />
            </PopoverTrigger>
            <PopoverContent className='rounded-[1rem] p-2 bg-gray-100 max-h-[320px]'>
              <div className='overflow-y-auto max-h-[300px]'>
                <div className='flex flex-col items-center bg'>
                  <div className='grid grid-cols-3 gap-2 rounded-[1rem]'>
                    {menus.map((item) => {
                      return (
                        <MenuItem
                          key={item.title}
                          title={item.title}
                          icon={item.icon}
                        />
                      );
                    })}
                  </div>
                  <Separator orientation='horizontal' />
                  <div className='grid grid-cols-3 gap-2 p-2'>
                    {anotherMenus.map((item) => {
                      return (
                        <MenuItem
                          key={item.title}
                          title={item.title}
                          icon={item.icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <div className='bg-red-300 rounded-full cursor-pointer size-7'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
