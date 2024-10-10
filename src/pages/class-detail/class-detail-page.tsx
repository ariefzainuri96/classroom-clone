import { Separator } from '@/components/ui/separator';
import { ClassDetailTabsModel } from '@/model/class-detail-tabs-model';
import { Outlet, useLocation } from 'react-router-dom';
import { TabsItem } from './components/tabs-item';

export const ClassDetailPage = () => {
  const location = useLocation();

  const tabs: ClassDetailTabsModel[] = [
    {
      title: 'Stream',
      path: `/class/${location.pathname.split('/')[2]}/`,
    },
    {
      title: 'Classwork',
      path: `/class/${location.pathname.split('/')[2]}/classwork`,
    },
    {
      title: 'People',
      path: `/class/${location.pathname.split('/')[2]}/people`,
    },
    {
      title: 'Grades',
      path: `/class/${location.pathname.split('/')[2]}/grades`,
    },
  ];

  return (
    <div className='flex flex-col flex-1 p-0 overflow-hidden'>
      <div className='flex flex-row px-4'>
        {tabs.map((item) => {
          return (
            <TabsItem
              key={item.path}
              title={item.title}
              path={item.path}
            />
          );
        })}
      </div>
      <Separator className='' />
      <Outlet />
    </div>
  );
};
