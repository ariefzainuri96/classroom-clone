import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { ArrowDownAZ, ChevronDown, UserRoundPlusIcon } from 'lucide-react';
import { StudentsItem, StudentsItemProps } from './components/students-item';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useEffect, useRef } from 'react';

export const PeoplePage = () => {
  const teachersInputRefs = useRef<HTMLInputElement>(null);
  const students: StudentsItemProps[] = [
    {
      name: 'Arief Zainuri',
    },
    {
      name: 'Revo',
    },
    {
      name: 'Aura',
    },
    {
      name: 'Azwan',
    },
  ];

  useEffect(() => {
    teachersInputRefs.current?.blur();
  }, []);

  return (
    <div className='flex-1 w-full overflow-y-auto'>
      <div className='flex flex-col items-start p-6'>
        <div className='flex flex-row items-center w-full px-4'>
          <span className='flex-1 text-[2rem] font-semibold'>Teachers</span>
          <Dialog>
            <DialogTrigger asChild>
              <UserRoundPlusIcon className='cursor-pointer ic-container size-10' />
            </DialogTrigger>
            <DialogContent>
              <div className='flex flex-col items-start p-4'>
                <span className='text-[1rem] font-semibold text-gray-600'>Invite Teachers</span>
                <form>
                  <input
                    ref={teachersInputRefs}
                    type='text'
                    placeholder='Type a name or email'
                    className='placeholder-gray-100 outline-none border-[1px] border-gray-50'
                  />
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Separator
          orientation='horizontal'
          className='my-4'
        />
        <div className='flex flex-row items-center gap-4 px-4'>
          <div className='bg-red-200 rounded-full size-10' />
          <span className='text-[1rem] text-gray-600'>Arief Zainuri</span>
        </div>
        <div className='flex flex-row items-center w-full gap-2 px-4 mt-8'>
          <span className='flex-1 text-[2rem] font-semibold'>Students</span>
          <span className='text-sm font-semibold text-gray-500'>2 students</span>
          <UserRoundPlusIcon className='cursor-pointer ic-container size-10' />
        </div>
        <Separator
          orientation='horizontal'
          className='my-4'
        />
        <div className='flex flex-row items-center w-full px-4 mb-4'>
          <div className='flex flex-row items-center flex-1 gap-6'>
            <div className='flex items-center justify-center p-3 cursor-pointer ic-container'>
              <Checkbox className='border-gray-400 rounded-sm size-5' />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='border-[1px] rounded-md gap-2 px-4 py-2 cursor-pointer hover:bg-blue-50 flex flex-row items-center'>
                  <span className='text-[1rem]'>Actions</span>
                  <ChevronDown className='text-gray-600 size-4' />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Email students</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
                <DropdownMenuItem>Mute</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ArrowDownAZ className='text-gray-600 cursor-pointer ic-container size-10' />
        </div>
        {students.map((item) => {
          return (
            <StudentsItem
              key={item.name}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};
