import React from "react";
import './styles.css'
import styled from 'styled-components';
import ImageCard from '../imageCard/index';
import ReactStars from "react-rating-stars-component";

const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;


const RestaurantCard = ({ restaurant }) => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                         <div className="card-horizontal">
                            <div className="img-square-wrapper card-body">
                                <ImageCard photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{ restaurant.name }</h4>
                                <p className="card-text">{ restaurant.info }</p>
                                <ReactStars count={5} isHalf edit={false} value={restaurant.rating}/>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
    )

export default RestaurantCard;