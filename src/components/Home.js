import './Home.css';
const Home = () => {

    const handleClick = () => console.log('Clicked');

    return(
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click this</button>
        </div>
    );
};
export default Home;