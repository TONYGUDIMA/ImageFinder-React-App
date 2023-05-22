import React, { useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ src, handleClose }) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyPressed);
    return () => {
      document.removeEventListener('keydown', onKeyPressed);
    };
  }, []);

  const handleCloseModal = e => {
    if (e.target.className === css.overlay) {
      handleClose();
    }
  };

  const onKeyPressed = event => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      handleClose();
    }
  };

  return (
    <div
      className={css.overlay}
      onClick={handleCloseModal}
      onKeyDown={onKeyPressed}
    >
      <div className={css.modal}>
        <img src={src} alt="" width="800" height="600" />
      </div>
    </div>
  );
}
