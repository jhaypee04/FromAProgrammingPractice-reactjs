import { useState } from "react";

const AddBlog = () => {
    // console.log()
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [blogpost, setBlogPost] = useState('')

    const formData = {author, title, blogpost}

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

    }
    return ( 
        <>
            <h1>Add Blog page</h1>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <fieldset>
                    <legend>Create a Blog</legend>
                    {/*  */}
                    <label htmlFor="author">Author: </label>
                    <input type="text" placeholder="name of author" value={author} onChange={(e)=>setAuthor(e.target.value)} />
                    {/*  */}
                    <label htmlFor="title">Title: </label>
                    <input type="text" placeholder="title of blog post" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    {/*  */}
                    <label htmlFor="blogpost">Title: </label>
                    <textarea name="blogpost" id="blogpost" cols="30" rows="10"  value={blogpost} onChange={(e)=>setBlogPost(e.target.value)} ></textarea>
                    {/*  */}
                    <input type='submit' value="Add Blog" />
                </fieldset>
            </form>
        </>
     );
}
 
export default AddBlog;