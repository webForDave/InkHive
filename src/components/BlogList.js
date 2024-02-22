const BlogList = ({blogs, handleDelete}) => {
    return (
        <div>
            {
                blogs.map(blog => (
                    <div key={blog.id} className='blog-preview'>
                        <h3>{ blog.title }</h3>
                        <p>written by { blog.author }</p>
                        <button onClick={() => {handleDelete(blog.id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogList;