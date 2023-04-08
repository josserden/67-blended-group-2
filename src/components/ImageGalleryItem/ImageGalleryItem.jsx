import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <li
      className={css['image-gallery-item']}
      onClick={() => onImageClick(largeImageURL)}
    >
      <img className={css['gallery-item']} src={webformatURL} alt={tags} />

      <span className={css.tags}>{tags}</span>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
