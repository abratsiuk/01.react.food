import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            console.log(data.categories);
            setCatalog(data.categories);
        });
    }, []);

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </>
    );
}

export { Home };
