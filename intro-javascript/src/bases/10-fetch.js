//fetch api
const apiKey = 'XlpZqOkLQJACGax9xVHoDeKkOKm6e53e';
const peticion = fetch (`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
/* froma 1
apeticion.then( res =>{
    res.json().then(data =>{
        console.log(data)
    })
})
.catch(console.warn);*/
peticion
.then( res => res.json())
.then( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);

    //console.log(data.images.original.url)
}).catch(console.warn);