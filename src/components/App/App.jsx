import { useState } from 'react';

import { useImageSearch } from 'hooks/useImageSearch';

import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';

import css from './App.module.css';

export const App = () => {
  const { images, handleFormSubmit, handleLoadMore } = useImageSearch();

  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = largeImageURL => {
    toggleModal();
    setLargeImageURL(largeImageURL);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery images={images} onImageClick={handleImageClick} />

      <Button onClick={handleLoadMore} />

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImageURL} alt="" width="800" height="600" />
        </Modal>
      )}
    </div>
  );
};
