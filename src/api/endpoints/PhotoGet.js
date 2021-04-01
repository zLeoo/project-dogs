const PhotoGet = () => {
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Photo Get</h1>
            <input type="text" />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet;