const ROOT_URL = "https://json-server-nesw.herokuapp.com";

export function latestNews(){
    const request = fetch(`${ROOT_URL}/articles?_order=desc&_end=3`,{method:'GET'})
                    .then(response=>response.json());

    return{
        type: "GET_LATEST",
        payload: request
    }
}