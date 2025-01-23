'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './TimeDropDown.css';
import { instance } from '../../app/api/instance';

interface TimeDropDownProps {
  onTimeSelect: (
    scheduleId: string,
    count: { pending: number; confirmed: number; declined: number }
  ) => void;
  selectedActivityId: string;
  selectedDate: string;
}

const TimeDropDown = ({
  onTimeSelect,
  selectedActivityId,
  selectedDate,
}: TimeDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('시간을 선택하세요');
  const [timeRanges, setTimeRanges] = useState<
    {
      timeRange: string;
      scheduleId: string;
      count: { pending: number; confirmed: number; declined: number };
    }[]
  >([]);

  const fetchTimeRanges = async () => {
    if (!selectedActivityId || !selectedDate) return;

    try {
      const response = await instance.get(
        `my-activities/${selectedActivityId}/reserved-schedule`,
        {
          params: { date: selectedDate },
        }
      );

      const data = response.data;

      const fetchedTimeRanges = data.map(
        (schedule: {
          scheduleId: string;
          startTime: string;
          endTime: string;
          count: { declined: number; confirmed: number; pending: number };
        }) => ({
          timeRange: `${schedule.startTime} ~ ${schedule.endTime}`,
          scheduleId: schedule.scheduleId,
          count: schedule.count,
        })
      );

      setTimeRanges(fetchedTimeRanges);
    } catch (error) {
      console.error('Error fetching time ranges:', error);
    }
  };

  useEffect(() => {
    fetchTimeRanges();
  }, [selectedActivityId, selectedDate, fetchTimeRanges]);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (index: number) => {
    setSelectedTime(timeRanges[index].timeRange);
    setIsOpen(false);
    onTimeSelect(timeRanges[index].scheduleId, timeRanges[index].count);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color: selectedTime === '시간을 선택하세요' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedTime}
        </p>
        <Image
          src="../../../icons/chevron_down.svg"
          alt="Chevron Down"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {isOpen && (
        <div className={DropDownBoxWrap}>
          <ul className={DropDownContainer}>
            {timeRanges.map((timeRange, index) => (
              <li
                key={index}
                className={ListItem}
                onClick={() => onOptionClicked(index)}
              >
                {timeRange.timeRange}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeDropDown;

