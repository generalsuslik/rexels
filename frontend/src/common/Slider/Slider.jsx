import { useEffect, useState } from "react";
import '../../images/sunset1.avif'

import classes from './Slider.module.css';


// const data = [
//     {url: '../../images/mountain_dawn.avif'},
//     {url: '../../images/sunset1.avif'},
//     {url: '../../images/green.jpg'},
//     {url: '../../images/mountain_night.jpg'}
// ]

const data = [
    {url: 'http://127.0.0.1:8000/media/images/hero/green.jpg'},
    {url: 'http://127.0.0.1:8000/media/images/hero/sunset1.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/sunset2.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/mountain_dawn.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/mountain_night.jpg'},
]


export const Slider = ({ children }) => {

    const [currentDataIndex, setCurrentDataIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentDataIndex === data.length - 1) {
                setCurrentDataIndex(0);
            } 
            else {
                setCurrentDataIndex(currentDataIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])

    console.log("sd", currentDataIndex);

    const sliderStyle = {
        width: "100%",
        height: "100%", 
        backgroundImage: `url(${data[currentDataIndex].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        zIndex: "2222",
        transition: 'all 0.4s',
    }

    console.log("ss", sliderStyle.backgroundImage)

    return (
        <div className={classes.slider} style={sliderStyle}>
            { children }
        </div>
    );
}