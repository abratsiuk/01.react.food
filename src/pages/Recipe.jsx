import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';

function Recipe() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(idMeal).then((data) => {
            setRecipe(data.meals[0]);
        });
    }, [idMeal]);

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{recipe.strMeal}</span>
                <p>{recipe.strInstructions.slice(0, 60)}...</p>
            </div>
        </div>
    );
}
export { Recipe };
