import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [annonces, setAnnonces] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/annonce/category`, { category }, config);
                setAnnonces(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryAnnonce = () => {
        let list = [];
        let result = [];

        annonces.map(annoncePost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(annoncePost.category)}</strong>
                        <h3 className="mb-0">{annoncePost.title}</h3>
                        <div className="mb-1 text-muted">{annoncePost.date}</div>
                        <p className="card-text mb-auto">{annoncePost.lieu}</p>
                        <Link to={`/blog/${annoncePost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={annoncePost.photo} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <h3 className='display-4'>{currentCategory} Category</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/primary school'>Primary School</Link>
                    <Link className="p-2 text-muted" to='/category/middle school'>Middle School</Link>
                    <Link className="p-2 text-muted" to='/category/secondary school'>Secondary School</Link>
                    <Link className="p-2 text-muted" to='/category/tertiary education'>Tertiary Education</Link>
                </nav>
            </div>
            {getCategoryAnnonce()}
        </div>
    );
};

export default Category;