
const Blogs = ({formData}) => {
    console.log({Blogs: formData})
    return ( 
        <>
            <h1>Blogs List</h1>
            {
                formData.map((post)=>{
                    return (
                        <div className="post_container">
                           <div className="author-heading">Author: <b>{post.author}</b></div>
                           <div className="title-wrapper">Title: <b>{post.title}</b></div>
                           <div className="post-wrapper">Post: {post.blogpost}</div>
                        </div>
                    )
                })
            }
        </>
     );
}
 
export default Blogs;