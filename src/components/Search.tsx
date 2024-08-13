import React from 'react';
import { SearchLinks } from './SearchLinks';

/**
 * Основная строка поиска
 */


const links = [
  {
    address: '#',
    name: 'Видео',
  },
  {
    address: '#',
    name: 'Картинки',
  },
  {
    address: '#',
    name: 'Новости',
  },
  {
    address: '#',
    name: 'Карты',
  },
  {
    address: '#',
    name: 'Маркет',
  },
  {
    address: '#',
    name: 'Переводчик',
  },
];

export const Search: React.FC = () => {
  return (
    <>
      <div className='form'>
        <img src='https://avatars.mds.yandex.net/get-bunker/998550/492ae8000e920665da8b56e0b7bc69899c5c56b6/orig' alt='Yandex Logo' />
        <div className='links-form'>
          <div className='search-links'>
            <SearchLinks links={links} />
          </div>
          <div className='search-form'>
            <input className='input' type='text' name='' id='' />
            <button className='button'>Поиск</button>
          </div>
        </div>
      </div>
    </>
  );
};
