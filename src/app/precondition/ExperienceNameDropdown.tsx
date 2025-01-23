'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './ExperienceNameDropdown.css';
import { instance } from '../../app/api/instance';

interface ExperienceNameDropDownProps {
  onCategorySelect: (categoryId: string) => void;
}

interface Activity {
  id: string;
  title: string;
}

interface ActivityAPIItem {
  id: string;
  title: string;
}

const ExperienceNameDropdown = ({
  onCategorySelect,
}: ExperienceNameDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] =
    useState<string>('체험을 선택하세요');
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchActivities = async () => {
    try {
      const response = await instance.get('/my-activities?size=40');

      if (response.status !== 200) {
        throw new Error(`Failed to fetch activities: ${response.statusText}`);
      }

      const fetchedActivities = response.data.activities.map(
        (activity: ActivityAPIItem) => ({
          id: activity.id,
          title: activity.title,
        })
      );

      setActivities(fetchedActivities);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (id: string, title: string) => {
    setSelectedTitle(title);
    setIsOpen(false);
    onCategorySelect(id);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color:
              selectedTitle === '체험을 선택하세요' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedTitle}
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
            {activities.map((activity, index) => (
              <li
                key={index}
                className={ListItem}
                onClick={() => onOptionClicked(activity.id, activity.title)}
              >
                {activity.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceNameDropdown;
