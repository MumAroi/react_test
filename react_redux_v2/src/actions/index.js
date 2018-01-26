// step 27 : data url
const URL_ROOT = "https://json-server-react-redux-v2.herokuapp.com";

// step 21 : create function getCars
export default function getCars(keywords){
    // console.log(`request : ${keywords}`);
    // step 28 : get data if not use promiseMiddleware will return payload:promise if use will retunr payload:response
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`,{method: 'GET'})
    .then(response=>response.json())
    // step 29 : return data to reducer
    return({
        type: 'SEARCH_CARS',
        payload: request
    });
}