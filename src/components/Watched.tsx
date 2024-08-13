import React from 'react';
import CardLine from './CardLine';

/**
 * Список посещаемых
 */



const props = [
  {
    text: 'Недижвижмость - о сталинках',
  },
  {
    text: 'Маркет - люстры и светильники',
  },
  {
    text: 'Авто.ру - привод 4х4 до 500 000',
  },
];

export const Watched: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title-second'>Посещаемое</h1>
        <div className='items'>
          {props.map((items, index) => (
            <CardLine key={index} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};
