'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './CategoryDropdown.css';

interface CategoryDropDownProps {
  onCategorySelect: (category: string) => void;
}

const CategoryDropDown = ({ onCategorySelect }: CategoryDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리');

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedCategory(value);
    onCategorySelect(value);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color: selectedCategory === '카테고리' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedCategory}
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
            <li className={ListItem} onClick={onOptionClicked('문화 · 예술')}>
              문화 · 예술
            </li>
            <li className={ListItem} onClick={onOptionClicked('식음료')}>
              식음료
            </li>
            <li className={ListItem} onClick={onOptionClicked('스포츠')}>
              스포츠
            </li>
            <li className={ListItem} onClick={onOptionClicked('투어')}>
              투어
            </li>
            <li className={ListItem} onClick={onOptionClicked('관광')}>
              관광
            </li>
            <li className={ListItem} onClick={onOptionClicked('웰빙')}>
              웰빙
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropDown;

