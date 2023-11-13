import React, { useState } from 'react';


import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';



const Slide = () => {

//   const [slide, setSlide] = useState(1);

//   const nextSlide = () => {
//     setSlide(slide + 1 );
//     // setSlide(slide + 1); 
//   }

//   const preSlide = () => {
//     // setSlide(slide - 1);
//     setSlide(slide === 0 ? slide -1 : slide + 1);
//   }

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide ( slide + 1) ;
  }
  

    return(
        <div className="slider">
            <div className="slider-wrapper">
                <div className="slider-change previous">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#6a5af9",}} onClick={nextSlide} />
                </div>
                <div className="slider-change next">
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#6a5af9",}}/>
                </div>
                <div className={`slider-content ${setSlide ? "slider-img" : "slider slide hidden"}`}>
                    <div className="slider-item">
                        <img
                            className={slide ? "slide": "slide slider-hidden"}
                            src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="slide 1" />
                    </div>
                    <div className="slider-item">
                        <img
                            className={slide ? "slide": "slide slider-hidden"}
                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGllZCUyMG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="slide 2" />
                    </div>
                    <div className="slider-item">
                        <img
                            className={slide ? "slide": "slide slider-hidden"}
                            src="https://appliednutrition.uk/cdn/shop/articles/collagen_featured_600x600.jpg?v=1697192479"
                            alt="slide 3" />
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Slide;