import data from '../../data/getReview.js';
import { useEffect, useState } from 'react';
import '../css/detailLecture/reviewLecture.css';

function Review(props) {

    let [reviews, setReview] = useState(data);

    const renderStars = (star) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={`star ${i <= star ? 'filled' : ''}`}>
              ★
            </span>
          );
        }
        return (
          <div className="star-container">
            {stars}
            <span style={{ marginLeft: "10px" , color: "#ffcc00", fontSize: "18px"}}>{star}</span>
          </div>
        );
      };

    return (
      <div className="review-container">
        {reviews.map(function (review, i) {
          return (
            <div key={i} className="review-item">
              <div className="username">{review.username}</div>
              <div className="content">{review.content}</div>
              <div className="aaa">
                  <div className="review-header"> {renderStars(review.star)}</div>
                  <div className="updated-at">Updated at: {review.updatedAt}</div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
  
  

export default Review;