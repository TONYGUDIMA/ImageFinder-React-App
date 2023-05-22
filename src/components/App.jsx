import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import Search from './Search/Search';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { BallTriangle } from 'react-loader-spinner';
import { PixabayService } from 'fetch';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [isShowSpinner, setIsShowSpinner] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (q === '') {
        return;
      }
      setIsShowSpinner(true);
      const [hits, totalPages] = await PixabayService.get(currentPage, q);
      console.log('totalPages', totalPages);
      if (currentPage === totalPages) {
        setLoadMore(false);
      }
      setData(prevData => [...prevData, ...hits]);
      setIsShowSpinner(false);
    }

    fetchData();
  }, [currentPage, q]);

  const handleSubmit = value => {
    const trimmedQ = value.trim();
    setData([]);
    setQ(trimmedQ);
    setCurrentPage(1);
    setLoadMore(true);
  };

  const onClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Search onSubmit={handleSubmit} />
      <ImageGallery data={data} />
      {data.length > 0 && loadMore && <Button onClick={onClick} />}
      {isShowSpinner && (
        <BallTriangle
          wrapperStyle={{ position: 'fixed', top: '50vh', left: '50vw' }}
        />
      )}
    </div>
  );
}
