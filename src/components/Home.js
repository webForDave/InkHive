import { useState } from 'react';
import './Home.css';

const Home = () => {

    const [name, setName] = useState('David');

    const handleClick = () => {
        setName('Mike')

        if (name === 'Mike') {
            setName('David');
        }
    };

    return(
        <div className="home">
            <h1>Homepage</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click this</button>
        </div>
    );
};
export default Home;