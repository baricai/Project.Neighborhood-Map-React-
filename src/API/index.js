class Helper {
    static baseURL(){
        return "https://api.foursquare.com/v2";
    }
    static auth() {

        const keys = {
            client_id:"4FE42AROVDQTD435DK1QW4VI0GC21SKEVV0A4S0XHNMVENCR",
            client_secret:"EBOHDMYU42ANEEVF1RWAZH3ACQX4YVU042UDH4XG4BKVY0SC",
            //site:"https://api.foursquare.com/v2/venues/search?client_id=" + client_id + "&client_secret=" + client_secret + "&v=20130815&ll=" + marker.getPosition().lat() + "," + marker.getPosition().lng() + "&limit=1",
            v:"20181006"
        };
        return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join("&");
    }
    static urlBuilder(urlPrams){
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
            .map(key => `${key}=${urlPrams[key]}`)
            .join("&");
    }


    static headers() {
        return {
            Accept:"application/json"
        };
    }
    static simpleFetch(endPoint, method, urlPrams){
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlPrams
            )}`,
            requestData
        ).then(res => res.json()
        );
    }
}

export default class SquareAPI {
    static search(urlPrams){
        return Helper.simpleFetch("/venues/search", "GET", urlPrams);

        
    }
    static getVenueDetails(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");

    }
    static getVenuePhotos(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");

    }
}