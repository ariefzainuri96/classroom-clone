import { StorageKey } from '@/lib/storage-key';
import { ClassModel } from '@/model/class-model';
import { FaChevronRight } from 'react-icons/fa';

type CustomBreadCrumbProps = {
  path?: string;
};

export const CustomBreadCrumb = ({ path }: CustomBreadCrumbProps) => {
  const content = () => {
    if (path === 'class') {
      const dataStorage: ClassModel = JSON.parse(localStorage.getItem(StorageKey.CLASS_DATA) ?? '');

      return dataStorage.className;
    } else if (path === 'calendar') {
      return 'Calendar';
    } else if (path === 'to-review') {
      return 'To review';
    } else if (path === 'archived-classes') {
      return 'Archived classes';
    } else {
      return 'Settings';
    }
  };

  return (
    <div className='flex flex-row items-center gap-3'>
      <FaChevronRight
        size={14}
        className='mt-1 text-gray-500'
      />
      <span className='text-2xl font-normal text-gray-500'>{content()}</span>
    </div>
  );
};
