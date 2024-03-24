import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { ReactComponent as User} from '../../assets/images/Reviews/user.svg';
import { ReactComponent as StarIcon} from '../../assets/images/Reviews/star.svg'; 
import { ReactComponent as UnactiveStarIcon} from '../../assets/images/Reviews/unactive-star.svg';

const ReviewCard = ({ name, text, rating, current = false  }) => {
  return (
    <div className={`reviews__card ${current ? 'reviews__current' : 'reviews__not-current'} `}>
      <User className="reviews__user-pic" />
      <Box component="fieldset" borderColor="transparent" sx={{ '& .MuiRating-icon': { marginRight: '0.5rem', fontSize: '1rem' } }}>
        <Rating
          name="read-only"
          value={rating}
          readOnly
          icon={<StarIcon className={`reviews__star ${current ? 'reviews__current-star' : ''}`} />}
          emptyIcon={<UnactiveStarIcon className={`reviews__star ${current ? 'reviews__current-star' : ''}`} />}
        />
      </Box>
      <div className="reviews__comment-content">
        <h2>{name}</h2>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ReviewCard;