import { useState } from "react";


const UserToken = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((json) => setToken(json.token))
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>User Token</h1>
            <input type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)} />
            
            <input type="text" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)} />
            <button>Enviar</button>
            <p>{token}</p>
        </form>
    )

}

export default UserToken;