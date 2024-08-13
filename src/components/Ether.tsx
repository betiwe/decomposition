import React from 'react';
import CardLine from './CardLine';


/**
 * Списрк Эфиров
 */


const props = [
  {
    emoji: '▶️',
    text: 'Управление как искусство',
  },
  {
    emoji: '▶️',
    text: 'Ночь. Мир в это время',
  },
  {
    emoji: '▶️',
    text: 'Андрей Вознесенский',
  },
];

export const Ether: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title-second'>Эфир</h1>
        <div className='items'>
          {props.map((items, index) => (
            <CardLine key={index} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};
