import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

interface Monster {
  id: number;
  name: string;
  email: string;
}

interface CardListProps {
  monsters: Monster[];
}

export const CardList: React.FC<CardListProps> = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
