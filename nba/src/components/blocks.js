import React from 'react';
// step 43 : import react-routee-dom
import { Link } from 'react-router-dom';
// step 42 : import react-reveal
import {Fade} from 'react-reveal';
// step 39 : create Blocks component
const Blocks = (props) => {
        console.log(props)
        return(
            <div className="home-block">
                {generateBlocks(props)}
            </div>
        );
}

// step 41 : create generateBlocks 
const generateBlocks  = ({blocks}) => {
    if(blocks){
        return blocks.map((item)=>{
            return(
                <Fade bottom key={item.id} >Your content goes here</Fade>
            );
        });
    }
}

export default Blocks;