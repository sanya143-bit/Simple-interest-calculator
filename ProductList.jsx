import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    cost: "$15",
                    description: "Produces oxygen at night, improving air quality."
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/kettering-3530452_1280.jpg",
                    cost: "$12",
                    description: "Filters formaldehyde and xylene from the air."
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    return (
        <div className="product-list-container">
            <h2>Our Plant Collection</h2>
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h3>{category.category}</h3>
                    <div className="plant-grid">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="plant-card" key={plantIndex}>
                                <img src={plant.image} alt={plant.name} width="200" />
                                <h4>{plant.name}</h4>
                                <p>{plant.cost}</p>
                                <p>{plant.description}</p>
                                <button 
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={addedToCart[plant.name]}
                                    style={{ backgroundColor: addedToCart[plant.name] ? 'grey' : '#4CAF50', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer' }}
                                >
                                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
