import React from 'react';
import {Link} from 'react-router-dom';

import './css/artistsList.css';

const  ArtistsList = (props) => {

    //  gen artists list
    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map( (item) => {
                const stlyes = {
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                };
                return (
                    <Link key={item.id} to={`/artists/${item.id}`} className="artists_item" style={stlyes}  >
                        <div>{item.name}</div>
                    </Link>
                );
            }); 
        }
    }

    return(
        <div className='artists_list' >
            <h2>Browser Artists List</h2>
            {list(props)}
        </div>
    );
}

export default ArtistsList;