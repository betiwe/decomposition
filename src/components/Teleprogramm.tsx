import React from 'react';
import CardLine from './CardLine';


/**
 * Списрк Телепрограмм
 */


const props = [
  {
    text: '02:00 THT.Best',
  },
  {
    text: '02:15 Джинглики',
  },
  {
    text: '02:25 Наедине со всеми',
  }
];

export const Teleprogramm: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title-second'>Телепрограмма</h1>
        <div className='items'>
          {props.map((items, index) => (
            <CardLine key={index} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};
