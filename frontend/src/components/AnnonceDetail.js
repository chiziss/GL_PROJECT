import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AnnonceDetail = (props) => {
    const [annonce, setAnnonce] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/annonce/${slug}`);
                setAnnonce(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createAnnonce = () => {
        return {__html: annonce.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{annonce.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(annonce.category)}Theme: {capitalizeFirstLetter(annonce.theme)}Modalite: {capitalizeFirstLetter(annonce.modalite)}</h2>
            <h4>{annonce.date}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createAnnonce()} />
            <hr />
            <p className='lead mb-5'><Link to='/annonce' className='font-weight-bold'>Back to Annonces</Link></p>
        </div>
    );
};

export default AnnonceDetail;