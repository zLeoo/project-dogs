import { useState } from "react";

const UserPost = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((json) => console.log(json))
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>User Post</h1>
            <input type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={({target}) => setEmail(target.value)} />
            <input type="text" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)} />
            <button>Enviar</button>
        </form>
    )

}

export default UserPost;