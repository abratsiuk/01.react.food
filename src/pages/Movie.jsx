import {
    useParams,
    useNavigate,
    useLocation,
    useMatch,
} from 'react-router-dom';
function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();

    const v1 = useLocation();
    console.log('useLocation', v1);
    const v2 = useMatch('/home/');
    console.log('useMatch', v2);

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
