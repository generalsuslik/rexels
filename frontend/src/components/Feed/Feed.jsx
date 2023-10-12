import axios from 'axios'
import { useState, useEffect } from 'react';

import Hero from '../Hero';

import './feed.css';
import Layout from '../../common/Layout/Layout';


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

    const baseUrl = "http://127.0.0.1:8000";

    // Making 3 columns of photos. Photos are already sorted by likes on each photo 
    let column1 = photos.filter((_, index) => index % 3 === 0);
    let column2 = photos.filter((_, index) => index % 3 === 1);
    let column3 = photos.filter((_, index) => index % 3 === 2);

    // case screen width < 500
    let column4 = photos.filter((_, index) => index % 2 === 0);
    let column5 = photos.filter((_, index) => index % 2 === 1);

    return (
        <Layout> 
            <Hero />
            <div className='feed'>
                <div className='column column1'>
                    {column1.map((photo) => (
                        <div className='image-item'>
                            <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image skeleton' alt='sss' loading='lazy'/>
                            <div className='icon-container'>
                                <i class="fa-solid fa-bookmark"></i>
                                <span>{photo.likes}<i className="fa-solid fa-heart"/></span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='column column2'>
                    {column2.map((photo) => (
                        <div className='image-item'>
                            <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image skeleton' alt='sss' loading='lazy'/>
                            <div className='icon-container'>
                                <i class="fa-solid fa-bookmark"></i>
                                <span>{photo.likes}<i class="fa-solid fa-heart"/></span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='column column3'>
                    {column3.map((photo) => (
                        <div className='image-item'>
                            <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image skeleton' alt='sss' loading='lazy'/>
                            <div className='icon-container'>
                                <i class="fa-solid fa-bookmark"></i>
                                <span>{photo.likes}<i class="fa-solid fa-heart"/></span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='column column4'>
                    {column4.map((photo) => (
                        <div className='image-item'>
                            <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image skeleton' alt='sss' loading='lazy'/>
                            <div className='icon-container'>
                                <i class="fa-solid fa-bookmark"></i>
                                <span>{photo.likes}<i class="fa-solid fa-heart"/></span>
                            </div>
                            <div className='author-conatainer'>
                                <h4>{photo.user.username}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='column column5'>
                    {column5.map((photo) => (
                        <div className='image-item'>
                            <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image skeleton' alt='sss' loading='lazy'/>
                            <div className='icon-container'>
                                <i class="fa-solid fa-bookmark"></i>
                                <span>{photo.likes}<i class="fa-solid fa-heart"/></span>
                            </div>
                            <div className='author-conatainer'>
                                <h4>{photo.user.username}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}


export default Feed;

