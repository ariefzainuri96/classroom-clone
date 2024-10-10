import { ClassDetailTabsModel } from '@/model/class-detail-tabs-model';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const TabsItem = ({ path, title }: ClassDetailTabsModel) => {
  const location = useLocation();

  const isSelected = () => {
    return location.pathname === path;
  };

  return (
    <Link to={path}>
      <div
        className={twMerge('hover:bg-gray-50 h-12 flex flex-col', isSelected() && 'text-blue-500 border-b-blue-500')}
      >
        <div className='flex flex-col justify-center flex-1'>
          <span className='mx-4 font-semibold'>{title}</span>
        </div>
        <div
          className={twMerge(
            'w-full h-1 bg-blue-500 rounded-tl-md rounded-tr-md',
            isSelected() ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </Link>
  );
};
