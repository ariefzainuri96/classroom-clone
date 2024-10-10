import { Separator } from '@/components/ui/separator';
import { StorageKey } from '@/lib/storage-key';
import { ClassModel } from '@/model/class-model';
import { FaChartLine, FaEllipsisV, FaFolder } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type ClassItemProps = {
  data: ClassModel;
};

export const ClassItem = ({ data }: ClassItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();

        localStorage.setItem(StorageKey.CLASS_DATA, JSON.stringify(data));

        navigate(`/class/${data.classId}/`);
      }}
      className='flex flex-col items-start border-[1px] hover:shadow-md rounded-md cursor-pointer'
    >
      <div className='px-3 w-full bg-green-500 pt-[10px] pb-[20px] flex flex-row rounded-tl-md rounded-tr-md'>
        <div className='flex flex-col items-start flex-1'>
          <span className='text-[20px] text-white'>{data.className}</span>
          <span className={twMerge('text-[14px] text-white', data.section === undefined && 'opacity-0')}>
            {data.section ?? '-'}
          </span>
        </div>
        <FaEllipsisV className='mt-[10px] text-white cursor-pointer' />
      </div>
      <div className='h-[100px]'></div>
      <Separator orientation='horizontal' />
      <div className='flex flex-row justify-end w-full gap-5 p-4'>
        <FaChartLine className='text-gray-500 cursor-pointer' />
        <FaFolder className='text-gray-500 cursor-pointer' />
      </div>
    </div>
  );
};
