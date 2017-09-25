import React from 'react';

const PostItem = ({match}) => {
    // console.log(match)
    // return <div> post id is :  </div>
    return <div> post id is : {match.params.id} </div>
}

export default PostItem;