import { useState } from 'react';
import './Home.css';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Welcome', body: 'Lorem ipsum...', id: 1, author: 'Dave'},
        {title: 'School tips', body: 'Lorem ipsum...', id: 2, author: 'Ken'},
        {title: 'Sleeping', body: 'Lorem ipsum...', id: 3, author: 'Joy'}
    ])

    return(
        <div className="home">
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
};
export default Home;