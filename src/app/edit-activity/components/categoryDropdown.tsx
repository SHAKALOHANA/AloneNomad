'use client';

import React, { useState } from 'react';
import ChevronDown from '../../../../public/icons/chevron_down.svg';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './categoryDropdown.css';

interface CategoryDropDownProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string; // 부모가 관리하는 카테고리 값
}

const CATEGORIES = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

export default function CategoryDropDown({
  onCategorySelect,
  selectedCategory,
}: CategoryDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 열기/닫기
  const onToggle = () => setIsOpen((prev) => !prev);

  // 카테고리 선택 시
  const onOptionClicked = (value: string) => () => {
    onCategorySelect(value);
    setIsOpen(false);
  };

  // 부모에서 selectedCategory가 비어 있다면 기본값 "카테고리"로 표시
  const displayedCategory = selectedCategory || '카테고리';

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color: displayedCategory === '카테고리' ? '#a1a1a1' : '#000000',
          }}
        >
          {displayedCategory}
        </p>
        <ChevronDown width={24} height={24} style={{ cursor: 'pointer' }} />
      </div>

      {isOpen && (
        <div className={DropDownBoxWrap}>
          <ul className={DropDownContainer}>
            {CATEGORIES.map((cat) => (
              <li key={cat} className={ListItem} onClick={onOptionClicked(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
