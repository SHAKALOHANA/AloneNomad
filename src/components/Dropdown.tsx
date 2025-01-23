'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as styles from './Dropdown.css';
import DropdownBox from './Dropdown/DropdownBox';
import DropdownMenu from './Dropdown/DropdownMenu';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleItemSelect = (value: string) => {
    setSelectedValue(value);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel =
    items.find((item) => item.value === selectedValue)?.label || label;

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <DropdownBox onClick={handleButtonClick} label={selectedLabel} />
      <DropdownMenu
        items={items}
        onSelect={handleItemSelect}
        isVisible={isMenuOpen}
      />
    </div>
  );
};

export default Dropdown;
