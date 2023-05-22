import React from 'react';
import css from './Button.module.css';

export default function Button({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" className={css.button} onClick={handleClick}>
      Load More
    </button>
  );
}
