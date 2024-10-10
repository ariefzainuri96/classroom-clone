import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVerticalIcon } from 'lucide-react';

export type StudentsItemProps = {
  name: string;
};

export const StudentsItem = ({ name }: StudentsItemProps) => {
  return (
    <div className='flex gap-6 px-4 py-2 flex-row items-center cursor-pointer w-full hover:bg-gray-50 border-b-[1px] border-b-gray-50 hover:border-b-transparent'>
      <div className='flex items-center justify-center p-3 cursor-pointer ic-container'>
        <Checkbox className='border-gray-400 rounded-sm size-5' />
      </div>
      <div className='flex flex-row items-center flex-1 gap-4'>
        <div className='rounded-full size-8 bg-red-50' />
        <span className='flex-1 text-[1rem] font-medium text-gray-600'>{name}</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVerticalIcon className='text-gray-600 size-10 ic-container' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Email student</DropdownMenuItem>
          <DropdownMenuItem>Remove</DropdownMenuItem>
          <DropdownMenuItem>Mute Flaming Lassoo</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
