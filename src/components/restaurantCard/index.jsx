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


class RestaurantCard extends React.Component {
    render(){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                         <div className="card-horizontal">
                            <div className="img-square-wrapper card-body">
                                <ImageCard photo={this.props.restaurantImage} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{ this.props.restaurantName }</h4>
                                <p className="card-text">{ this.props.restaurantInfo }</p>
                                <ReactStars count={5} isHalf edit={false} value={4}/>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
    )
       {/* <div class="card mb-3 card-width">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img className="" src={ this.props.restaurantImage } alt="Imagem de capa do card" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{ this.props.restaurantName}</h5>
                        <p class="card-text">{ this.props.restaurantInfo }</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
    </div>*/}
    }
}

export default RestaurantCard;