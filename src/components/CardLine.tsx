import React from 'react';

/**
 * Элемент списка в виде ссылки
 */

interface CardLineProps {
  emoji?: string;
  text: string;
}

const CardLine: React.FC<CardLineProps> = ({ emoji, text }) => {

  

  return (
    <div className='cardline'>
      <span className='emoji'>{emoji}</span>
      <p className='title_parag'>{text}</p>
    </div>
  );
};

export default CardLine;
