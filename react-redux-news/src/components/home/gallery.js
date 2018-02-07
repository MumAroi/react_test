import React from 'react';
import { Link } from 'react-router-dom';
// load slider
import Slider from 'react-slick';

// set up slider option
const setting = {
    dots: false,
    infinite: true,
    speed :500,
    sliderToShow: 1,
    sliderToScroll: 1
}

// template gallery
const showGallery = ({latestGalleries}) => {
    if(latestGalleries){
        return(
            <Slider {...setting}>
                {latestGalleries.map((item)=>{
                    return(
                        <Link to={`/galleries/${item.id}`} key={item.id} className="slider-item">
                            <div className="image" style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                                <h3>{item.artist}</h3>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
        );
    }
}

const Gallery = (props) => {
    // console.log(props)
    return(
        <div className="home-gallerys">
            <h2>Awsome Gallery</h2>
            {showGallery(props)}
        </div>
    );
}

export default Gallery;