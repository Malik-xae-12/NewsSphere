import React, { Component } from "react"; //todo rce

export class NewsItem extends Component {
  render() {  //todo props are written below the render
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
