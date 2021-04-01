
import { useContext, useRef } from 'react';
import { UserContext } from './../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

import { useState } from 'react';

import styles from './PhotoComments.module.css';
import { useEffect } from 'react';

const PhotoComments = (props, single) => {

    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = useRef(null);

    const {login} = useContext(UserContext);

    useEffect(() => {
        commentsSection.current.scrollTop =  commentsSection.current.scrollHeight;
    }, [comments]);

    return(
        <>
            <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
                {comments.map((comment) => (
                <li key={comment.comment_ID}>
                    <b>{comment.comment_author}: </b>
                    <span>{comment.comment_content}</span>
                </li>
                )
                )}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
        </>
    )
    
} 

export default PhotoComments;