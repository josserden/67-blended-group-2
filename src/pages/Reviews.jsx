import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchReviewsMovie } from 'services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
      }
    })();
  }, [movieId]);

  return (
    <div className="ml-5">
      <h2 className="font-bold mt-3 text-xl mb-3">Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className="mb-3">
              <h3 className="font-bold">Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 mb-5">We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
