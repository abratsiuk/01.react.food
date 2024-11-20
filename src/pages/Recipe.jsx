import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(idMeal).then((data) => {
            setRecipe(data.meals[0]);
        });
    }, [idMeal]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                        />
                    </div>
                    <div className='card-content'>
                        <span className='card-title'>{recipe.strMeal}</span>
                        <h6>Category: {recipe.strCategory}</h6>
                        {!recipe.strArea ? (
                            <h6>Area: {recipe.strArea}</h6>
                        ) : null}
                        <h6>Instructions:</h6>
                        {recipe.strInstructions.split(/(?<=\.)/).map((s) => (
                            <p className='instruction'>{s}</p>
                        ))}
                    </div>
                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {!recipe.strYoutube ? null : (
                        <div className='row'>
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                {' '}
                                Video Recipe
                            </h5>
                            <iframe
                                title={idMeal}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowfullscreen
                            />
                        </div>
                    )}
                </div>
            )}
            <button
                className='btn'
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </>
    );
}
export { Recipe };
