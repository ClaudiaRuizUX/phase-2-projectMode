
import React, { Component } from 'react';
import './App.css';
import News from './News/News'; 
import SavedNewsList from './News/SavedNewsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
          <ul class="tabs">
            <li class="tab col s3"><a href="#test1" class="active">Finance</a></li>
            <li class="tab col s3"><a href="#test2">Crypto</a></li>
            <li class="tab col s3"><a href="#test3">Regulation</a></li>
          </ul>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <h3>Saved for Later</h3>
            <SavedNewsList news={this.state.news2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;












// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import './App.css';
// import NavBar from './News/NavBar';
// import Finance from './News/Finance';
// import Crypto from './News/Crypto';
// import Regulation from './News/Regulation';

// const App = (props) => {
//   return(
//     <Router>
//       <div className="app">
//         <NavBar />
//         <Route exact path="/" component={Finance} />
//         <Route exact path="/Crypto" component={Crypto} />
//         <Route exact path="/Regulation" component={Regulation} />
//       </div>
//     </Router>
//   );
// };

// export default App;

