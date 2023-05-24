import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ src, source }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpen = () => {
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <li className={css.imageGalleryItem} onClick={handleOpen}>
        <img src={src} alt="" className={css.imageGalleryItemImage} />
        {isShowModal && <Modal src={source} handleClose={handleClose} />}
      </li>
    </>
  );
}
