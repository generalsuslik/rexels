import axios from 'axios'
import { useState, useEffect } from 'react';


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

    const baseUrl = "http://127.0.0.1:8000"


    return (
        <div className='feed'>
            {photos.map((photo) => (
                <div className='blur-load'>
                    <img src={`${baseUrl}${photo.image}`} className='image' alt='sss' loading='lazy' />
                </div>
            ))}
        </div>
    );
}


export default Feed;

