const apiCalls = {
//Makes calls to heroku supported server
//Note rate limit is 4500/hour
  getApiData: () => {
    // return getData('http://makeup-api.herokuapp.com/api/v1/products.json')
    return getData('https://faceit-server.herokuapp.com/products')

  },

//use below for development
//need to have local server running
//please see README for further details
  getLocalData: () => {
    return getData('http://localhost:3000/products')
  }
}

const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
}

export default apiCalls;
