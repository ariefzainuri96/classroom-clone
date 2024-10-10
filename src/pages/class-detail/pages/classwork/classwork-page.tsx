import { CustomButton } from '@/components/custom-button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTriggerWithoutIcon,
  SelectValue,
} from '@/components/ui/select';
import { TopicModel } from '@/model/topic-model';
import { ChevronDown } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
import { TopicItem } from './components/topic-item';
import iconEmpty from '../../../../assets/classwork-empty.svg';
import { twMerge } from 'tailwind-merge';

export const ClassworkPage = () => {
  const topics: TopicModel[] = [
    {
      title: 'Topic 1',
      assignments: [
        {
          title: 'Assignment 1',
        },
        {
          title: 'Assignment 2',
        },
      ],
    },
    {
      title: 'Topic 2',
      assignments: [
        {
          title: 'Assignment 1',
        },
      ],
    },
    {
      title: 'Topic 3',
      assignments: [
        {
          title: 'Assignment 1',
        },
      ],
    },
    {
      title: 'Topic 4',
      assignments: [
        {
          title: 'Assignment 1',
        },
      ],
    },
    {
      title: 'Topic 5',
      assignments: [
        {
          title: 'Assignment 1',
        },
      ],
    },
    {
      title: 'Topic 6',
      assignments: [
        {
          title: 'Assignment 1',
        },
      ],
    },
    {
      title: 'Topic 7',
      assignments: [],
    },
    {
      title: 'Topic 8',
      assignments: [],
    },
    {
      title: 'Topic 9',
      assignments: [],
    },
  ];

  return (
    <div className={twMerge('flex-1 w-full', topics.length > 0 ? 'overflow-y-auto' : 'overflow-hidden')}>
      <div className={twMerge('flex flex-col items-start p-4', topics.length === 0 && 'h-full')}>
        <CustomButton
          title={'Create'}
          IconData={FaPlus}
          className='mb-4 text-white bg-blue-500 rounded-full hover:bg-blue-600'
        />
        {topics.length === 0 && (
          <div className='flex flex-col items-center justify-center flex-1 w-full'>
            <div className='flex flex-col items-center'>
              <img
                src={iconEmpty}
                alt='mySvgImage'
                width={225}
                height={225}
              />
              <span className='text-[1rem] font-semibold text-gray-600 mt-5'>{"This is where you'll assign work"}</span>
              <span className='text-[1rem] font-medium text-gray-500 mt-2'>
                You can add assignments and other work for the class, then organize it into topics
              </span>
            </div>
          </div>
        )}
        {topics.length > 0 && (
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTriggerWithoutIcon className='w-[200px]'>
              <SelectValue placeholder='All topics' />
              <ChevronDown
                size={16}
                className='text-gray-500'
              />
            </SelectTriggerWithoutIcon>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='all'>All topics</SelectItem>
                {topics.map((item) => {
                  return (
                    <SelectItem
                      key={item.title}
                      value={item.title}
                    >
                      {item.title}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        {topics.length > 0 && (
          <div className='flex flex-col w-full gap-4 mt-4'>
            {topics.map((item) => {
              return (
                <TopicItem
                  key={item.title}
                  title={item.title}
                  assignments={item.assignments}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
