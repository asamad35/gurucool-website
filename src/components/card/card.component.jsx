import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faFire,faBookmark } from '@fortawesome/free-solid-svg-icons'



import './card.styles.scss'
const Card = ({heading, description, reviews, ratings, image, popular}) => {
    const ratingsArray = new Array(ratings).fill(0)
    return (
        <>
             <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-text-box flex">
                <h2 className='card-heading'>{heading}</h2>
                <p className='card-paragraph'>{description}</p>
                <div className="card-rating flex">
                    {ratingsArray.map( () => <FontAwesomeIcon size='2x' style={{color:'#EDB300'}} icon={faStar} />)}
                
                <span className='card-paragraph'>{reviews}</span>
                </div>

                { popular ?
                <div className="popular flex">
                <div className='feature-box flex'>
                    <FontAwesomeIcon size='2x' style={{color:'#f9c933'}} icon={faFire} />
                    <p className='popular-text'>Trending</p>
                </div>
                <FontAwesomeIcon size='2x' style={{color:'#f9c933'}} icon={faBookmark} />
                </div>
                : ''
                }
            </div>
        </>
    );
};

export default Card;