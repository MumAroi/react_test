import React from 'react';
// load link
import { Link } from 'react-router-dom';

// template latest
const showLatest = ({latest}) => {
    if(latest){
        // console.log(latest)
        return latest.map((item)=>{
            return(
                <Link to={`/news/${item.id}`} key={item.id} className="item" >
                    <div className="image-cover" style={{background:`url(/images/articles/${item.img})`}} >
                        <div className="description">
                            <span>{item.category}</span>
                            <span>{item.title}</span>
                        </div>
                    </div>
                </Link>
            );  
        });
    }
}


const LatestNews = (props) => {
    // console.log(props);
    return(
        <div className="home-latest">
            {showLatest(props)}
        </div>
    );
}

export  default  LatestNews;