'use client';

import React, { useEffect, useState } from 'react';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import Calendar from './FullCalendar';
import ExperienceNameDropdown from './ExperienceNameDropdown';

import { mainContainer, sideContainer } from './page.css';

const Precondition = () => {
  const [category, setCategory] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={mainContainer}>
        {!isMobile && <SideNavigationMenu />}
        <div className={sideContainer}>
          <h1>예약 현황</h1>
          <ExperienceNameDropdown onCategorySelect={handleCategoryChange} />
          {category && <Calendar selectedId={category} />}
        </div>
      </div>
    </div>
  );
};

export default Precondition;
