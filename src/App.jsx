import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Movie } from './pages/Movie';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/about'
                            element={<About />}
                        />
                        <Route
                            path='/contacts'
                            element={<Contact />}
                        />
                        <Route
                            path='/movies/:id'
                            element={<Movie />}
                        />
                        <Route element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
