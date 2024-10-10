export type MenuItemProps = {
  title: string;
  icon: string;
};

export const MenuItem = ({ title, icon }: MenuItemProps) => {
  return (
    <div className='flex flex-col items-center pt-2 pb-1 rounded-lg cursor-pointer hover:bg-gray-50'>
      <img
        src={icon}
        className='size-6'
      />
      <span className='text-[1rem] mt-1 line-clamp-2 text-center leading-[1.5] font-normal'>{title}</span>
    </div>
  );
};
