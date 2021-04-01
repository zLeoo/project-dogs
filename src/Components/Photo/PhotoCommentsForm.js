
import { useState, React } from 'react';
import { COMMENT_POST } from '../../api';
import {ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../Helper/Error';
import useFetch from './../../Hooks/useFetch';
import styles from './PhotoCommentsForm.module.css';


const PhotoCommentsPhoto = ({id, setComments, single}) => {

    const [comment, setComment] = useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const token = window.localStorage.getItem('token');

        const {url, options} = COMMENT_POST(id, {comment}, token);
        const {response, json} = await request(url, options); 
        if(response.ok){
            setComment('');
            setComments((comments) => [...comments, json])
        }

    }




    return(
        <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
            <textarea className={styles.textarea} id="comment" name="comment" placeholder="Comente..." value={comment} onChange={({target}) => setComment(target.value)} />
            <button className={styles.button}>
                <Enviar/>
            </button>
            <Error error={error}/>
        </form>
    )
} 

export default PhotoCommentsPhoto;