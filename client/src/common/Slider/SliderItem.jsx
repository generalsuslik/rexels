import React from 'react'

import classes from "./Slider.module.css"


const SliderItem = ({ url }) => {

  return (
    <div className={classes.sliderItem}>
        <img src={url} />
    </div>
  )
}

export default SliderItem