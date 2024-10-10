import { CustomButton } from '@/components/custom-button';
import { useToast } from '@/components/ui/use-toast';
import { StorageKey } from '@/lib/storage-key';
import { ClassModel } from '@/model/class-model';
import { FaCopy, FaEllipsisV, FaInfoCircle, FaPen, FaWrench } from 'react-icons/fa';

export const StreamPage = () => {
  const classData = () => {
    return JSON.parse(localStorage.getItem(StorageKey.CLASS_DATA) ?? '') as ClassModel;
  };

  const { toast } = useToast();

  return (
    <div className='flex-1 w-full overflow-y-auto'>
      <div className='flex flex-col p-4'>
        {/* Header */}
        <div className='flex flex-col w-full p-4 bg-green-500 rounded-lg'>
          <div className='flex flex-row justify-end'>
            <CustomButton
              title={'Customize'}
              IconData={FaPen}
              className='text-blue-500'
            />
          </div>
          <div className='h-10' />
          <div className='flex flex-row items-end'>
            <span className='text-[2rem] flex-1 font-semibold text-white'>{classData().className}</span>
            <FaInfoCircle
              size={20}
              className='text-white'
            />
          </div>
        </div>
        <div className='flex flex-row gap-4 mt-4'>
          {/* left */}
          <div className='w-[200px] flex flex-col'>
            {/* class code */}
            <div className='rounded-md p-4 flex flex-col items-start border-[1px] w-full'>
              <div className='flex flex-row items-center w-full'>
                <span className='flex-1 text-[1rem] text-gray-600'>Class code</span>
                <FaEllipsisV
                  size={16}
                  className='text-gray-600 cursor-pointer'
                />
              </div>
              <div className='flex flex-row items-center gap-3 mt-2'>
                <span className='text-xl font-semibold text-blue-500'>1238723</span>
                <FaCopy
                  onClick={(e) => {
                    e.preventDefault();

                    toast({
                      description: 'Link copied to clipboard',
                    });
                  }}
                  size={16}
                  className='text-blue-500 cursor-pointer'
                />
              </div>
            </div>
            {/* upcoming */}
            <div className='rounded-md mt-4 p-4 flex flex-col items-start border-[1px] w-full'>
              <span className='text-[1rem] text-gray-600'>Upcoming</span>
              <span className='mt-2 text-sm font-light text-gray-600'>No work due soon</span>
              <div className='w-full cursor-pointer flex flex-row justify-end mt-2 text-blue-500 font-semibold text-[1rem]'>
                View all
              </div>
            </div>
          </div>
          {/* right */}
          <div className='flex flex-col flex-1'>
            {/* announcemenet */}
            <div className='flex flex-row items-center gap-2 py-4 pl-4 pr-2 rounded-md shadow-lg cursor-pointer group'>
              <div className='bg-red-200 rounded-full size-10' />
              <span className='flex-1 text-sm font-normal text-gray-600 group-hover:text-black group-hover:font-medium'>
                Announce something to your class
              </span>
              <div className='p-3 ic-container'>
                <FaEllipsisV
                  size={16}
                  className='text-gray-500'
                />
              </div>
            </div>
            {/* stream settings */}
            <div className='rounded-md mt-4 p-4 flex flex-col items-start border-[1px] w-full'>
              <span className='text-2xl text-gray-600'>This is where you can talk to your class</span>
              <span className='mt-2 text-sm text-gray-600'>
                Use the stream to share announcements, post assignments, and respond to student questions.
              </span>
              <div className='flex flex-row justify-end w-full mt-4'>
                <CustomButton
                  title={'Stream settings'}
                  IconData={FaWrench}
                  className='text-blue-500 border-[1px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
