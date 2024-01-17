import React, { Component } from "react"; //todo rce
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Import PropTypes

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
    background:"danger",
    category:"general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    background:PropTypes.string,
    category:PropTypes.string,
  };

  capitalizeFirst=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  //* this will execute first
  //todo to use props inside the constructor we have to write props as an argument to constructor and super keywords
  constructor(props) {
    super(props);  
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirst(this.props.category)} - NewsMonkey`
  }

  async  updateNews(){  //todo no need to write the keyword function
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75c075b645bb4619a41b6de73de2eb66&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  //* this will immedietely after the render
  async componentDidMount() {   
    this.updateNews();
   
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page-1});
    this.updateNews()
  };

  handleNextClick = async () => {    
    this.setState({page:this.state.page+1});
    this.updateNews()
  };

  render() {
    //todo js is return above the render
    return (
      <div className="container my-3">
        <h1 className="text-center my-5">NewsMonkey - Top {this.capitalizeFirst(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
              return (
              <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage? element.urlToImage: "https://c.ndtvimg.com/2024-01/cbevd6t8_salman-khan_625x300_14_January_24.jpg"}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} background={this.props.background}/>
              </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize)}>Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
