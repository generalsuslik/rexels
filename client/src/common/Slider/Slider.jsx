import { useCallback, useEffect, useState, useRef } from "react";


const slideStyles = {
    width: "1920px",
    height: "650px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};


const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};


const data = [
    {url: 'http://127.0.0.1:8000/media/images/hero/green.jpg'},
    {url: 'http://127.0.0.1:8000/media/images/hero/sunset1.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/sunset2.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/mountain_dawn.avif'},
    {url: 'http://127.0.0.1:8000/media/images/hero/mountain_night.jpg'},
]


export const Slider = ({ parentWidth, children }) => {
    const timerRef = useRef(null); 
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, data]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };  

    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        "backgroundImage": `url(${data[slideIndex].url})`,
        width: "1920px",
    })

    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * data.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

    useEffect(() => {
        if (timerRef.current){
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            goToNext();
        }, 2000);

        return () => clearInterval(timerRef.current);
    }, [goToNext]);

    return (
        <div style={slideStyles}>
            <div>
                <div style={slidesContainerOverflowStyles}>
                    <div style={getSlidesContainerStylesWithWidth()}>
                        {data.map((_, index) => (
                            <div key={index} style={getSlideStylesWithBackground(index)}>

                            </div>
                        ))}
                    </div>
                </div>
                <div style={dotsContainerStyles}>
                    {data.map((slide, index) => {
                        <div style={dotStyle} key={index} onClick={() => goToSlide(index)}>●</div>
                    })}
                </div>
            </div>
        </div>
    );
}