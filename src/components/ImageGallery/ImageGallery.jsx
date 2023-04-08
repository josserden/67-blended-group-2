import { PropTypes } from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ images = [], onImageClick }) => {
  return (
    <>
      {images && (
        <ul className={css.gallery}>
          {images.map(({ largeImageURL, webformatURL, id, tags }) => (
            <ImageGalleryItem
              key={largeImageURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onImageClick={onImageClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

ImageGallery.propType = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};
