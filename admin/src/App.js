import './App.css';


const API_URL = process.env.node_env === 'production' ? `${window.location.protocol}//${window.location.host}/api` : 'https://pipeline.moonshinevfx.com/api';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://storage.googleapis.com/public-lib/product.jpg' className="App-logo" alt="logo" />
          <a href={`${API_URL}/get-file/example.jpg`}>
              Download ya
          </a>
          <p>
          Here is admin control center yo.
        </p>
      </header>
    </div>
  );
}

export default App;
