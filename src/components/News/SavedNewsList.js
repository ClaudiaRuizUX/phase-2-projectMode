import React, { Component } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';
import Error from './Error';


class SavedNewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

  componentDidMount(){
    const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9a7f75898c5d4d319f49cf230b57ac39`;

    // axios.post(url, {
    //   data: {
    //     news: {
    //       title: 'lorem title',
    //       description: 'lorem descri'
    //     }
    //   }
    // })
    
    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
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
export default SavedNewsList;

