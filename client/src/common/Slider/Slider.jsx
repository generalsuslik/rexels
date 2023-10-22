import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";

import classes from "./Slider.module.css";


const slideContainerStyles = {
    height: "650px",
    transition: "transform ease-out 2.3s",
    width: "1920px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
};

const GetBestPhotos = () => {
    const [bestPhotos, setBestPhotos] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/photos/best/")
            .then(res => {
                setBestPhotos(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return bestPhotos;
}


export const Slider = ({ children }) => {
    const timerRef = useRef(null); 
    const [currentIndex, setCurrentIndex] = useState(0);

    const bestPhotos = GetBestPhotos()

    console.log(bestPhotos)

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === bestPhotos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, bestPhotos]);
    

    const slideContainer = (index) => ({
        ...slideContainerStyles, 
        "backgroundImage": bestPhotos.length === 0 ? null : `url(http://127.0.0.1:8000${bestPhotos[index].image})`
    })

    useEffect(() => {
        if (timerRef.current){
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            goToNext();
        }, 10000);

        return () => clearInterval(timerRef.current);
    }, [goToNext]);

    return (
        <div className={classes.slider}>
            <div className={classes.sliderInner}>
                <div className="skeleton" style={slideContainer(currentIndex)}></div>   
            </div>
            {children}
        </div>
    );
}