import React, { Component } from 'react';
import News from './News'; 
import SaveNews from './SaveNews'

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
           <SaveNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;

