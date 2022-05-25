import React, { Component } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';
import Error from './Error';


class SavedNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

   getSavedNews() {
     return fetch(`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9a7f75898c5d4d319f49cf230b57ac39`)
     .then(res => res.json())
     .then(data => data)
   }

  componentDidMount(){
    this.getSavedNews().then(data => this.setState({
      sidenews: data.articles
    }))
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SavedArticle key={item.url} item={item} />
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
export default SavedNews;

