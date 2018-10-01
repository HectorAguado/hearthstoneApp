import axios from 'axios'

// https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/{type}

// These code snippets use an open-source library. http://unirest.io/nodejs
/*
unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/types/Hero?collectible=1")
.header("X-Mashape-Key", "t6jal4Gs9omshC9iOrM9E8en8zGsp1N60rLjsnQXXftEFd136e")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/
const BASE_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com'
const HEADER_API_KEY = 'X-Mashape-Key'
const API_KEY = 't6jal4Gs9omshC9iOrM9E8en8zGsp1N60rLjsnQXXftEFd136e'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers = { 
        'X-Mashape-Key' : API_KEY,
        'Accept': 'application/json'
    }
}

export function fetchHeroes() {
    // const url = '/cards/types/Hero?collectible=1&locale=esES&'
    const url = '/cards/types/Hero?collectible=1'
    return axios.get( url )

    // return axios.get( url ).then((response) => {
    //     console.log("FETCH HEROES RESPONSE ==> OK ")
    // }).catch((error) => {
    //     console.log("FETCH HEROES ERROR: ", error)
    // });

}


// These code snippets use an open-source library. http://unirest.io/nodejs
/*
unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/info?locale=esES")
.header("X-Mashape-Key", "t6jal4Gs9omshC9iOrM9E8en8zGsp1N60rLjsnQXXftEFd136e")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/

export function fetchClasses(){
    const url = '/info?locale=esES'
    return axios.get( url )
}
