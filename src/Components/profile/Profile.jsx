import React from 'react';
import ProfileElement from './ProfileElement.jsx';
import './profile.css';
import {addPostActionCreator,updateTextareaActionCreator} from '../../state';



let Profile = (props) => {
    let textareaRef = React.createRef();

    let addPost = () => {
        let text = textareaRef.current.value;
        props.dispatch(addPostActionCreator(text), props.state);
        text = textareaRef.current.value = '';

    }
    let updateTextarea = () => {
        let text = textareaRef.current.value;
        props.updateTextarea(updateTextareaActionCreator(text), props.state)
    }
    let posts = props.posts.map(p => <ProfileElement text={p.text} id={p.id} likesCount={p.likesCount}/>)
    return(
        <div className="profile">
            <div className="profile__textarea"><input ref={textareaRef} onChange={updateTextarea} type="textarea" /></div>
            <div className="profile__addButton" onClick={addPost}>Добавить пост</div>
            <div className="profile__posts posts">{posts}</div>
        </div>
    );
}

export default Profile;