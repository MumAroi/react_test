
// step 27 : data url
const URL_ROOT = "https://json-server-react-redux-v2.herokuapp.com";

// step 21 : create function getCars
export function getCars(keywords){
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

// step 46 : create func getDetail
export function getDetail(id) {

    // step 47 : get car detail
    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`,{method:"GET"})
    .then(response=>response.json())
    // console.log(request);
    // console.log(id);
    // step 48 : return date to reducer
    return({
        type: 'CAR_DETAIL',
        payload: request
    });
}

// step 53 : clear detail
export function clearDetail(id) {
    return({
        type: 'CLEAR_DETALI',
        payload: []
    });
}

// step 54 : get all cars
export function listCars() {
    const request = fetch(`${URL_ROOT}/carsIndex`,{method:"GET"})
    .then(response=>response.json())
    return({
        type: 'LIST_CARS',
        payload: request
    });
}