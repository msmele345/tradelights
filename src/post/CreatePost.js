import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function CreatePost({user, posts, dispatch}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {register, errors, handleSubmit} = useForm();

    const handleTitle = (e) => setTitle(e.target.value);

    const handleContent = (e) => setContent(e.target.value);

    // const handleCreate = () => dispatch({type: 'CREATE_POST', title, content, author: user});

    const onSubmit = async (data) => {
        console.log("DATA", {data})
        setTitle(data.title)
        setContent(data.post)
        dispatch({type: 'CREATE_POST', title, content, author: user})
    };


    const handleUsername = (user) => {
        if(user && user !== '') {
            return (<h3>WHATS YOUR PLAY OF THE DAY, {user.toUpperCase()}?</h3>);
        }
        return (<h3>WHATS YOUR PLAY OF THE DAY?</h3>);
    }

    return (
        <div className={"create-post"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {handleUsername(user)}
                <section>
                    <label htmlFor="create-title">Title:</label>
                    <input name="title" ref={register({required: true})}/>
                    {errors.title && "A Post Title Is Required"}
                </section>
                <section>
                    <label htmlFor="post">Post:</label>
                    <input name="post" ref={register({required: true})}/>
                    {errors.post && "Content is required"}
                </section>
                <input type="submit" value="Create Post"/>
            </form>
        </div>
    )
}