import styles from "./Accordion.module.css";
import { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: FC<Props> = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={onClick}>
        <span>{title}</span>
        <span className={cn(styles.icon, isOpen && styles.iconOpen)}>+</span>
      </button>
      <div className={cn(styles.contentWrapper, { [styles.open]: isOpen })}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
