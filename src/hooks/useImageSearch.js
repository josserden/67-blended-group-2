import { useEffect, useState } from 'react';
import { getImages } from 'services/image-api';

export const useImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        const response = await getImages(query, page);
        setImages(images => [...images, ...response.hits]);
      } catch {
        console.error('Error');
      }
    };

    fetchImages();
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return {
    images,

    handleFormSubmit,
    handleLoadMore,
  };
};
