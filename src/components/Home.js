import './Home.css';
const Home = () => {

    const handleClick = () => console.log('Clicked');
    const handleClickAgain = name => console.log('Hello ' + name)

    return(
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click this</button>
            <button onClick={() => handleClickAgain(prompt('What is your name?'))}>Click again</button>
        </div>
    );
};
export default Home;