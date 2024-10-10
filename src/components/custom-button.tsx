import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';

type CustomButtonProps = {
  title: string;
  IconData?: IconType;
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export const CustomButton = ({ title, IconData, className, ...props }: CustomButtonProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex bg-white rounded-md gap-2 cursor-pointer hover:bg-gray-50 flex-row items-center px-4 py-2',
        className
      )}
    >
      {IconData && <IconData size={16} />}
      <span className='text-sm font-semibold'>{title}</span>
    </div>
  );
};
