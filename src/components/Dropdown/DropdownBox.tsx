import * as styles from './DropdownBox.css';

interface DropdownBoxProps {
  onClick: () => void;
  label: string;
}

const DropdownBox: React.FC<DropdownBoxProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.dropdownButton}>
    <span className={styles.dropdownText}>{label}</span>
  </button>
);

export default DropdownBox;