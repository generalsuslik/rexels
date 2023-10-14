import axios from 'axios'
import { useState, useEffect } from 'react';

import Hero from '../Hero';

import './feed.css';
import Layout from '../../common/Layout/Layout';
import { FeedComponent } from './FeedComponent';


const Feed = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/photos/")
            .then(res => {
                setPhotos(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <Layout> 
            <Hero />
            <FeedComponent photos={photos} />
        </Layout>
    );
}


export default Feed;

