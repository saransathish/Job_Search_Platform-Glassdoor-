// src/components/Card.tsx
import React from 'react';
import './css/Card.css';

interface CardProps {
  id: number;
  selected: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, selected, onClick }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
      Card {id}
    </div>
  );
};

export default Card;
