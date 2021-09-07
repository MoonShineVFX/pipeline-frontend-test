import logo from './logo.svg';
import './App.css';
import {Component} from "react";


const API_URL = process.env.node_env === 'production' ? `${window.location.protocol}//${window.location.host}/api` : 'https://pipeline.moonshinevfx.com/api';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestbookData: ''
        }
    }

    fetchGuestBook = async () => {
        const response = await fetch(
            `${API_URL}/sql`
        );
        const data = await response.json();
        this.setState(state => state.guestbookData = JSON.stringify(data));
    }

    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <button onClick={this.fetchGuestBook}>
                      Click to Show
                  </button>
                  <p>
                      This is web root.
                  </p>
                  <p>{this.state.guestbookData}</p>
              </header>
          </div>
      );
    }
}

export default App;
