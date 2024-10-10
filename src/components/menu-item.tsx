import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';

type TMenuItem = {
  title: string;
  Icon: IconType;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  variant?: 'nochild' | 'child' | 'class';
  path?: string;
  section?: string;
  expanded?: boolean;
  active?: boolean;
};

export const MenuItem = ({
  title,
  expanded = false,
  active = false,
  section,
  variant = 'nochild',
  className,
  Icon,
  onClick,
}: TMenuItem) => {
  const noChildClassRegex = /^(nochild|class)$/;

  const ChevronIcon = () => {
    if (expanded) {
      return (
        <FaChevronUp
          size={12}
          className='mr-1 text-gray-500'
        />
      );
    }

    return (
      <FaChevronDown
        size={12}
        className='mr-1 text-gray-500'
      />
    );
  };

  return (
    <div
      onClick={(e) => onClick(e)}
      className={twMerge(
        'flex min-w-[250px] mr-2 items-center flex-row py-2 rounded-tr-full rounded-br-full cursor-pointer hover:bg-gray-100',
        noChildClassRegex.test(variant) ? 'pl-[26px]' : 'pl-[10px]',
        active && 'bg-blue-50',
        className
      )}
    >
      {variant === 'child' && <ChevronIcon />}

      <div className='w-[32px] flex flex-row justify-center'>
        {variant === 'class' ? (
          <div className='flex flex-col items-center justify-center bg-green-600 rounded-full size-8'>
            <span className='text-white text-[14px] font-bold'>{title[0]}</span>
          </div>
        ) : (
          <Icon
            size={20}
            className={twMerge('text-gray-500')}
          />
        )}
      </div>

      <div className='flex flex-col items-start'>
        <span className='font-medium text-gray-500 text-[16px] ml-4'>{title}</span>
        {section && <span className='font-light text-[10px] mt-[2px]'>{section}</span>}
      </div>
    </div>
  );
};
