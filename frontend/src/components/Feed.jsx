import axios from 'axios'
import { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";


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

    let column1 = photos.filter((element, index) => index % 3 === 0);
    let column2 = photos.filter((element, index) => index % 3 === 1);
    let column3 = photos.filter((element, index) => index % 3 === 2);
    let index = 0;

    console.log(column1)

    return (
        <div className='feed'>
            <div className='column column1'>
                {column1.map((photo) => (
                    <div className='image-item'>
                        <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image' alt='sss' loading='lazy'/>
                        <div className='icon-container'>
                            <i class="fa-solid fa-square-heart like-icon"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='column column2'>
                {column2.map((photo) => (
                    <div className='image-item'>
                        <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image' alt='sss' loading='lazy'/>
                        <i class="fa-solid fa-square-heart"></i>
                    </div>
                ))}
            </div>
            <div className='column column3'>
                {column3.map((photo) => (
                    <div className='image-item'>
                        <img key={photo.id} src={`${baseUrl}${photo.image}`} className='image' alt='sss' loading='lazy'/>
                        <i class="fa-solid fa-square-heart"></i>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Feed;

