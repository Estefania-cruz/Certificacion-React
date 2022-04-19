const getImagen = async () =>{
    
    const apiKey = 'XlpZqOkLQJACGax9xVHoDeKkOKm6e53e';
    const peticion = await fetch (`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await peticion.json();
    const {url} = data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    }
    
    getImagen();