import { Component } from "react";

class News extends Component {
  styleforBg = [
    { background: "black" },
    { background: "red" },
    { background: "green" },
    { background: "blue" },
  ];
  selectedBg;
  render() {
    // console.log(this.props);
    const { title, img, url, date } = this.props;
    if (this.props.category == "science") {
      this.selectedBg = this.styleforBg[3];
    } else if (this.props.category == "health") {
      this.selectedBg = this.styleforBg[1];
    } else if (this.props.category == "sports") {
      this.selectedBg = this.selectedBg[3];
    } else if (this.props.category == "Business") {
      this.selectedBg = this.styleforBg[0];
    } else {
      this.selectedBg = this.styleforBg[2];
    }
    return (
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <div className="badge" style={this.selectedBg}>
            {this.props.badge}
          </div>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <span>Date:{date}</span>
            <h5 className="card-title">{title}</h5>
            <a href={url} className="btn btn-primary" target="blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
