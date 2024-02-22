import { useState } from 'react';
import './Home.css';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Welcome', body: 'Lorem ipsum...', id: 1, author: 'Dave'},
        {title: 'School tips', body: 'Lorem ipsum...', id: 2, author: 'Ken'},
        {title: 'Sleeping', body: 'Lorem ipsum...', id: 3, author: 'Joy'}
    ])

    return(
        <div className="home">
            <BlogList blogs={blogs} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Dave')}/>
        </div>
    );
};
export default Home;