import { useParams, useNavigate } from 'react-router-dom';
function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <h1>this is a movie {id}</h1>
            <button
                className='btn'
                onClick={() => navigate(-1)}
            >
                go back
            </button>
        </>
    );
}

export { Movie };
