import { useState } from 'react';
import './Home.css';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Welcome', body: 'Lorem ipsum...', id: 1, author: 'Dave'},
        {title: 'School tips', body: 'Lorem ipsum...', id: 2, author: 'Ken'},
        {title: 'Sleeping', body: 'Lorem ipsum...', id: 3, author: 'Joy'}
    ])

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return(
        <div className="home">
            <BlogList blogs={blogs} handleDelete={ handleDelete } />
        </div>
    );
};
export default Home;