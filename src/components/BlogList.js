const BlogList = ({blogs}) => {
    return (
        <div>
            {
                blogs.map(blog => (
                    <div key={blog.id} className='blog-preview'>
                        <h3>{ blog.title }</h3>
                        <p>written by { blog.author }</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogList;