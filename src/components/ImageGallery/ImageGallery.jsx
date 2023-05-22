import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

export default function ImageGallery({ data }) {
  return (
    <ul className={css.imageGallery}>
      {data.map(el => {
        return (
          <ImageGalleryItem
            src={el.webformatURL}
            key={nanoid()}
            source={el.largeImageURL}
          />
        );
      })}
    </ul>
  );
}
