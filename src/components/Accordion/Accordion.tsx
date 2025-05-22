"use client";
import styles from "./Accordion.module.css";
import { FC, useState } from "react";
import { AccordionItem } from "./AccordionItem";

const items = [
  { title: "О нас", content: "Мы компания, занимающаяся..." },
  {
    title: "С кем сотрудничаем?",
    content: "Мы сотрудничаем с такими компаниями как...",
  },
  {
    title: "Как мы работаем?",
    content: "Наша работа строится по следующей модели...",
  },
];

export const Accordion: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggleIndex(index)}
        >
          {item.content}
        </AccordionItem>
      ))} 
    </div>
  );
};
