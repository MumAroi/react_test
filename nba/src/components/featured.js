import React from 'react';
// step 25 : import react-slick
import Slider from 'react-slick';

// step 29 :create slides setting
const setting = {
    arrows: false,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScoll: 1
};

// step 27 : create function generateSlides
const generateSlides = ({slides}) => {
    if(slides){
        return(
            <Slider {...setting}>
                {slides.map((item)=>{
                    return(
                        <div className="item-slider" key={item.id}
                            style={{background:`url(../images/covers/${item.cover})`}}
                        >
                            <div className="caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        );
    }
}

// step 20 : create featured component
const Featured = ( props ) => {
    return(
        <div>
            {/* step 28 : load fuc generateSlides */}
            { generateSlides(props) }
        </div>
    );
}

export default Featured;
