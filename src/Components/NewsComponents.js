import { Component } from "react";
import News from "./News";
import loading from "./loading.gif";
import InfiniteScroll from "react-infinite-scroll-component";

// import bg from "./imagesnewspaper.jpg";
// import PropTypes from "prop-types";

class NewsComponents extends Component {
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };

  // static propsTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    console.log(props);

    document.title = `Raho Update from ${props.category}`;
    this.state = {
      article: [],
      // loading: false,
      page: 1,
    };
    // console.log("constructor");
  }

  componentDidMount() {
    console.log("componentdidmount");
    this.props.setProgress(0);
    // const Apikey = "30f176b7ef21423cbee1c348fe1fbe11";
    const urlWithApi = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.Apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    fetch(urlWithApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          article: data.articles,
          // loading: false,
          totalResults: data.totalResults,
        });
        this.props.setProgress(100);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  fetchData = () => {
    const Apikey = "30f176b7ef21423cbee1c348fe1fbe11";
    console.log(this);
    const urlWithApi = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.props.Apikey}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }`;

    setTimeout(() => {
      fetch(urlWithApi)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({
            article: this.state.article.concat(data.articles),
            // loading: false,
            page: this.state.page + 1,
          });
          console.log(this.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  // handleNextOne = () => {
  //   this.setState({ loading: false, article: [] });
  //   const Apikey = "30f176b7ef21423cbee1c348fe1fbe11";
  //   const urlWithApi = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=${props.Apikey}&page=${this.state.page + 1}&pageSize=${
  //     this.props.pageSize
  //   }`;

  //   fetch(urlWithApi)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         article: data.articles,
  //         loading: false,
  //         page: this.state.page + 1,
  //       });
  //       console.log(this.state);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // handlePrevious = () => {
  //   this.setState({ loading: false, article: [] });
  //   const Apikey = "30f176b7ef21423cbee1c348fe1fbe11";
  //   const urlWithApi = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=${props.Apikey}&page=${this.state.page - 1}&pageSize=${
  //     this.props.pageSize
  //   }`;

  //   fetch(urlWithApi)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         article: data.articles,
  //         loading: false,
  //         page: this.state.page - 1,
  //       });
  //       console.log(this.state);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Apka apna No.1 news platform
        </h1>
        <h3 style={{ textAlign: "center", color: "white" }}>
          Top Hadlines:{this.props.category}
        </h3>

        {console.log(this.props)}
        <div>
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchData}
            hasMore={this.state.article.length !== this.state.totalResults}
            loader={
              <div>
                <img src={loading} alt="" className="loadingagain" />
              </div>
            }
          >
            <div className="allnews">
              {this.state.article.map((obj) => {
                return (
                  <News
                    category={this.props.category}
                    badge={obj.source.name}
                    key={obj.url}
                    title={obj.title.slice(0, 35)}
                    url={obj.url}
                    date={obj.publishedAt}
                    img={
                      obj.urlToImage
                        ? obj.urlToImage
                        : "https://www.hindustantimes.com/ht-img/img/2023/02/16/1600x900/ANI-20230215318-0_1676565747144_1676565747144_1676565758042_1676565758042.jpg"
                    }
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>

        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1 ? false : false}
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextOne}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? false
                : false
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default NewsComponents;
