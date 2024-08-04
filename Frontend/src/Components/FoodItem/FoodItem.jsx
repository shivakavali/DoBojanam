import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import DownloadApp from '../DownloadApp/DownloadApp';

const FoodItem = ({id, name, price, description, image})=>{

    const {cartItems, addToCart, removeItems} = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="food-image" />
                {!cartItems[id] 
                 ? <img className='item-add-icon' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
                 : <div className='item-count-manage-container'>
                     <div className='item-count-manage-icon'>
                         <img className='image-manage-icon' onClick={()=>removeItems(id)} src={assets.remove_icon_red} alt="" />
                         <div>{cartItems[id]}</div>
                         <img className="image-manage-icon" onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                     </div>
                   </div>}
            </div>
           
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;