import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AssignmentModel } from '@/model/topic-model';
import { FaEllipsisV, FaSnapchat, FaTasks } from 'react-icons/fa';

export const AssingmentItem = ({ title }: AssignmentModel) => {
  const menus: string[] = ['Edit', 'Delete', 'Copy Link', 'Move up', 'Move down'];

  return (
    <div className='flex flex-row items-center w-full gap-3 px-4 py-2 rounded-md cursor-pointer group/assignment hover:shadow-lg'>
      <div className='p-2 text-white bg-green-500 rounded-full'>
        <FaTasks size={16} />
      </div>
      <div className='flex flex-row items-center flex-1 gap-2'>
        <span className=''>{title}</span>
        <FaSnapchat
          size={18}
          className='mt-[0.125rem] text-gray-400'
        />
        <span>1</span>
      </div>
      <span className='text-sm text-gray-500'>Due Today</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='p-3 rounded-full opacity-0 cursor-pointer group-hover/assignment:opacity-100 hover:bg-gray-50'>
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
              >
                {item}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
