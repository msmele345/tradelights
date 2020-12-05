import React, {useState} from "react";

export default function CreatePost({user, posts, dispatch}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);

    const handleContent = (e) => setContent(e.target.value);


    // const handleCreate = () => {
    //     const newPost = {title, content, author: user}
    //     setPosts([newPost, ...posts])
    // };

    //update form wand add header

    const handleCreate = () => {
        dispatch({type: 'CREATE_POST', title, content, author: user})
    }

    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>
                <h2>WHATS YOUR PLAY OF THE DAY?</h2>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title"/>
            </div>
            <input value={content} onChange={handleContent}/>
            <input type="submit" value="Create Post"/>
        </form>
    )
}
