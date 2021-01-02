import React, {useState} from "react";

export default function CreatePost({user, posts, dispatch}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);

    const handleContent = (e) => setContent(e.target.value);

    const handleCreate = () => dispatch({type: 'CREATE_POST', title, content, author: user});

    const handleUsername = (user) => {
        if(user && user !== '') {
            return (<h2>WHATS YOUR PLAY OF THE DAY, {user.toUpperCase()}?</h2>);
        }
        return (<h2>WHATS YOUR PLAY OF THE DAY?</h2>);
    }

    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>
                {handleUsername(user)}
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title"/>
            </div>
            <input value={content} onChange={handleContent}/>
            <input type="submit" value="Create Post"/>
        </form>
    )
}
