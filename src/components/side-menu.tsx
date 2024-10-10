import { MenuItem } from './menu-item';
import { FaArchive, FaCalendar, FaFolder, FaHouseUser, FaUserAlt, FaWrench } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { useState } from 'react';
import { ClassModel } from '@/model/class-model';
import { twMerge } from 'tailwind-merge';
import { useLocation, useNavigate } from 'react-router-dom';

type SideMenuProps = {
  forSheet?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideMenu = ({ forSheet = false, setOpen }: SideMenuProps) => {
  const [expanded, setExpanded] = useState(false);
  const [classList] = useState<ClassModel[]>([
    {
      className: 'Mathematics',
      classId: '1',
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  function closeSheet() {
    if (setOpen) {
      setOpen(false);
    }
  }

  return (
    <div className={twMerge('hidden overflow-y-auto bg-white lg:block', forSheet && 'block')}>
      <div className='flex flex-col items-start py-2 max-w-[300px]'>
        <MenuItem
          title={'Home'}
          Icon={FaHouseUser}
          onClick={(e) => {
            e.preventDefault();

            closeSheet();

            navigate('/');
          }}
          path='/home'
          active={location.pathname === '/'}
        />
        <MenuItem
          title={'Calendar'}
          Icon={FaCalendar}
          onClick={(e) => {
            e.preventDefault();

            closeSheet();

            navigate('/calendar');
          }}
          path='/calendar'
          active={location.pathname === '/calendar'}
        />
        <Separator
          orientation='horizontal'
          className='mt-2'
        />
        <MenuItem
          title={'Teaching'}
          Icon={FaUserAlt}
          onClick={(e) => {
            e.preventDefault();

            setExpanded((value) => !value);
          }}
          variant='child'
          className='mt-2'
          expanded={expanded}
        />
        {expanded && (
          <div className='flex flex-col items-start'>
            <MenuItem
              title={'To review'}
              Icon={FaFolder}
              onClick={(e) => {
                e.preventDefault();

                if (setOpen) {
                  setOpen(false);
                }

                navigate('/to-review');
              }}
              active={location.pathname === '/to-review'}
            />
            {classList.map((classItem) => (
              <MenuItem
                key={classItem.className}
                title={classItem.className}
                Icon={FaFolder}
                onClick={(e) => {
                  e.preventDefault();

                  if (setOpen) {
                    setOpen(false);
                  }

                  navigate(`/class/${classItem.classId}/`);
                }}
                section={classItem.section}
                variant='class'
                active={location.pathname === '/class'}
              />
            ))}
          </div>
        )}
        <Separator
          orientation='horizontal'
          className='mt-2'
        />
        <MenuItem
          title={'Archived classes'}
          Icon={FaArchive}
          onClick={(e) => {
            e.preventDefault();

            closeSheet();

            navigate('/archived-classes');
          }}
          className='mt-2'
          active={location.pathname === '/archived-classes'}
        />
        <MenuItem
          title={'Settings'}
          Icon={FaWrench}
          onClick={(e) => {
            e.preventDefault();

            closeSheet();

            navigate('/settings');
          }}
          active={location.pathname === '/settings'}
        />
      </div>
    </div>
  );
};

export default SideMenu;
