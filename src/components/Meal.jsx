import { Link } from 'react-router-dom';

function Meal(props) {
    const { idMeal, strMeal, strMealThumb } = props;
    console.log('props', idMeal, strMeal, strMealThumb);
    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={strMealThumb}
                    alt={strMeal}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div class='card-action'>
                <Link
                    to={`/recipe/${idMeal}`}
                    className='btn'
                >
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };
