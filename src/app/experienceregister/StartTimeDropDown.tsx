import React, { useState } from 'react';
import Image from 'next/image';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './StartTimeDropDown.css';

interface StartTimeDropDownProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}

const StartTimeDropDown: React.FC<StartTimeDropDownProps> = ({
  onChange,
  selected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    onChange(value);
    setIsOpen(false);
  };

  const timeOptions = Array.from({ length: 24 }, (_, index) => {
    const hour = String(index).padStart(2, '0');
    return `${hour}:00`;
  });

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color: selected === '시간선택' ? '#a1a1a1' : '#000000',
          }}
        >
          {selected}
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
          <ul
            className={DropDownContainer}
            style={{ maxHeight: '150px', overflowY: 'auto' }}
          >
            {timeOptions.map((time) => (
              <li
                key={time}
                className={ListItem}
                onClick={onOptionClicked(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StartTimeDropDown;

