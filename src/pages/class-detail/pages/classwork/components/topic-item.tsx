import { Separator } from '@/components/ui/separator';
import { TopicModel } from '@/model/topic-model';
import { FaEllipsisV } from 'react-icons/fa';
import { AssingmentItem } from './assignment-item';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const TopicItem = ({ title, assignments }: TopicModel) => {
  const [shadow, setShadow] = useState('');
  const [open, setOpen] = useState(false);

  const menus: string[] = ['Rename', 'Delete', 'Copy link', 'Move up', 'Move down'];

  const handleFirstDivHover = () => {
    setShadow('shadow-lg');
  };

  const handleSecondDivHover = () => {
    setShadow('');
  };

  const handleMouseLeave = () => {
    setShadow('');
  };

  return (
    <div className={twMerge('flex flex-col items-start w-full rounded-md', shadow)}>
      <div
        onMouseEnter={handleFirstDivHover}
        onMouseLeave={handleMouseLeave}
        className='flex flex-row items-center w-full p-4 text-gray-600 group/parent'
      >
        <span className='flex-1 text-3xl group-hover/parent:underline group-hover/parent:text-blue-500'>{title}</span>
        <DropdownMenu
          open={open}
          onOpenChange={setOpen}
        >
          <DropdownMenuTrigger asChild>
            <div className='p-3 rounded-full cursor-pointer hover:bg-gray-50'>
              <FaEllipsisV
                size={16}
                className='text-gray-600'
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='shadow-md'>
            {menus.map((item, index) => {
              if (index == 3) {
                return (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.preventDefault();

                        console.log(`DropdownMenuItem => ${item}`);
                        setOpen(false);
                      }}
                      key={item}
                      className='cursor-pointer'
                    >
                      {item}
                    </DropdownMenuItem>
                  </>
                );
              }
              return (
                <DropdownMenuItem
                  key={item}
                  className='cursor-pointer'
                  onClick={(e) => {
                    e.preventDefault();

                    console.log(`DropdownMenuItem => ${item}`);
                    setOpen(false);
                  }}
                >
                  {item}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator orientation='horizontal' />
      {assignments.length === 0 && (
        <span className='p-4 text-sm'>Students will see this topic once work is added to it</span>
      )}
      <div
        onMouseEnter={handleSecondDivHover}
        onMouseLeave={handleMouseLeave}
        className='w-full'
      >
        {assignments.length > 0 &&
          assignments.map((item) => {
            return (
              <AssingmentItem
                key={item.title}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};
