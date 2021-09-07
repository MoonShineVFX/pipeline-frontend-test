import './App.css';


const API_URL = process.env.node_env === 'production' ? `${window.location.protocol}//${window.location.host}/api` : 'https://pipeline.moonshinevfx.com/api';


function App() {
  const downloadObject = async () => {
    await fetch(
      `${API_URL}/get-file/example.jpg`,
      {redirect: 'follow'}
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href='https://storage.googleapis.com/image-lib/example.jpg?Expires=1631007926&GoogleAccessId=464125983428-compute%40developer.gserviceaccount.com&Signature=RDAXcZuKobiI0%2FtFHQ59xHeaWiup0nR2JXd8kd1YtR9x7IQXm3Vy3eedypF6Vl0YrICfXkQGVRLfssLc8jjRMX1KGRTu0GWjpPYIJkGA82DbgHHwR795cWWWSR6S7h%2FuG3PZ9sOV5bTiEsrNanAXGSQP5F%2Bypi0WJLtQosxBcyaox522JTZH0SJCGVmz2HGV4Yd7bVxGFe7lZ6o42VRI%2BwemkSo%2BSSco%2FuO9YKwNO2Lnk2qtggcHF%2FLg9kbv2KDmQ2%2BK3avJTuwnFF%2B%2Bvi77njA5yuZy38WzjB4MZkutiWsI4qUbHO1y3p%2BDb3mUSckOrkJbNKEvS8vMfBCw9CsEHw%3D%3D'>testa</a>
        <img src='https://storage.googleapis.com/public-lib/product.jpg' className="App-logo" alt="logo" />
          <button onClick={downloadObject}>
              Download ya
          </button>
          <p>
          Here is admin control center yo.
        </p>
      </header>
    </div>
  );
}

export default App;
