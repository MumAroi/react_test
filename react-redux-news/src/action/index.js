const ROOT_URL = "https://json-server-nesw.herokuapp.com";

export function latestNews(){
    const request = fetch(`${ROOT_URL}/articles?_order=desc&_end=3`,{method:'GET'})
                    .then(response=>response.json());

    return{
        type: "GET_LATEST",
        payload: request
    };
}

export function otherNews(){
    const request = fetch(`${ROOT_URL}/articles?_order=desc&_start=3&_end=10`,{method:'GET'})
                    .then(response=>response.json());
    return{
        type:"GET_OTHER",
        payload:request
    };
}

export function latestGallery() {
    const request = fetch(`${ROOT_URL}/galleries?_order=desc&_limit=2`,{method:'GET'})
                    .then(response=>response.json())

    return{
        type: "GET_LATEST_GALLERY",
        payload: request
    };
}

// news action
export function selectedNews(id){
    const request = fetch(`${ROOT_URL}/articles?id=${id}`,{method:'GET'})
                    .then(response=>response.json());
    return{
        type: 'GET_SELECTED_NEWS',
        payload: request
    }
}

export function clearSelectedNews(){
    return{
        type: 'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}

//  gallery item
export function selectedGallery(id){
    const request = fetch(`${ROOT_URL}/galleries?id=${id}`,{method:'GET'})
                    .then(response=>response.json());
    return{
        type: 'GET_SELECTED_GALLERY',
        payload: request
    }
}

export function clearSelectedGallery(){
    return{
        type: 'CLEAR_SELECTED_GALLERY',
        payload:[]
    }
}