import * as styles from './DropdownMenu.css';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  onSelect: (value: string) => void;
  isVisible: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect, isVisible }) => (
  <ul className={`${styles.dropdownMenu} ${isVisible ? styles.dropdownMenuVisible : ''}`}>
    {items.map((item, index) => {
      const itemClassName = `${styles.dropdownItem} ${
        index === 0 ? styles.dropdownItemTop : index === items.length - 1 ? styles.dropdownItemBottom : ''
      }`;

      return (
        <li
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={itemClassName}
        >
          {item.label}
        </li>
      );
    })}
  </ul>
);

export default DropdownMenu;