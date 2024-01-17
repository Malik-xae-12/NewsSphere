import React, { Component } from "react"; //todo rce

export class NewsItem extends Component {
  render() {  //todo props are written below the render
    let { title, description, imageUrl, newsUrl,author,date ,source,background} = this.props;
    return (
      <div>
        <div className="card"  >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
           <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${background}`} style={{zIndex: "1", left: "90%"}}>{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} at {new Date(date).toGMTString()}</small></p>            
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
