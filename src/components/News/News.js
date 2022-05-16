import React, { Component } from 'react';
import NewArticle from './NewArticle';
import Error from './Error';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
            error: false,
        };
    }

    componentDidMount(){
      const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9a7f75898c5d4d319f49cf230b57ac39`;

      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.news.map((item) => (
        <NewArticle
        key={item.url}
        item={item}
        // passArticleDetails={this.props.passArticle(item.url)} 
        />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
     <div className="row">
       {this.renderItems()}
     </div>   
    );
  }
}

export default News;
