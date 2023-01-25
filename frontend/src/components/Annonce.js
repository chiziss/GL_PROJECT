import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Annonce = () => {
    const [annonces, setAnnonces] = useState([]);
    const [FavorieAnnonces, setFavorieAnnonces] = useState([]);
    const [HistoryAnnonces, setHistoryAnnonces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonce/favorie`);
                setFavorieAnnonces(res.data[0]);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonce/history`);
                setHistoryAnnonces(res.data[0]);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchHistory();
    }, []);

    useEffect(() => {
        const fetchAnnonces = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonce/`);
                setAnnonces(res.data);
            }
            catch (err) {

            }
        }

        fetchAnnonces();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getAnnonces = () => {
        let list = [];
        let result = [];
        
        annonces.map(annoncePost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(annoncePost.category)}{capitalizeFirstLetter(annoncePost.theme)}{capitalizeFirstLetter(annoncePost.modalite)}</strong>
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
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <Link className="p-2 text-muted" to='/category/primary school'>Primary School</Link>
                    <Link className="p-2 text-muted" to='/category/middle school'>Middle School</Link>
                    <Link className="p-2 text-muted" to='/category/secondary school'>Secondary School</Link>
                    <Link className="p-2 text-muted" to='/category/tertiary education'>Tertiary Education</Link>
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{FavorieAnnonces.title}</h1>
                    <p className="lead my-3">{FavorieAnnonces.lieu}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${FavorieAnnonces.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{HistoryAnnonces.title}</h1>
                    <p className="lead my-3">{HistoryAnnonces.lieu}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${HistoryAnnonces.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>

            {getAnnonces()}
        </div>
    );
};

export default Annonce;