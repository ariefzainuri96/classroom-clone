import { ClassModel } from '@/model/class-model';
import { useEffect, useRef, useState } from 'react';
import { ClassItem } from './components/class-item';

const HomePage = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [classList] = useState<ClassModel[]>([
    {
      className: 'Mathematics',
      classId: '1',
    },
    {
      className: 'Physics',
      classId: '2',
    },
    {
      className: 'Physics 2',
      classId: '3',
    },
    {
      className: 'Physics 3',
      classId: '4',
    },
    {
      className: 'Physics 4',
      classId: '5',
    },
    {
      className: 'Physics 5',
      classId: '6',
    },
    {
      className: 'Physics 6',
      classId: '7',
    },
    {
      className: 'Physics 7',
      classId: '8',
    },
  ]);

  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition && divRef.current) {
      divRef.current.scrollTop = Number(scrollPosition) ?? 0;
      localStorage.removeItem('scrollPosition');
    }
  }, []);

  return (
    // scroll
    <div
      className='flex-1 overflow-y-auto'
      ref={divRef}
      onScroll={(event) => {
        localStorage.setItem('scrollPosition', `${event.currentTarget.scrollTop}`);
      }}
    >
      {/* column content */}
      <div className='flex flex-col p-4'>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
          {classList.map((data) => (
            <ClassItem
              key={data.classId}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
