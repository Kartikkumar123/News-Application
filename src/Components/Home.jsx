import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

const Home = ({language,q}) => {
  let [articles, setArticles] = useState([]);
  let [totalResult, setTotalResult] = useState(0);
  let [page, setPage] = useState(1);
  let size = 18;

  async function getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize${size}&sortBy=publishedAt&language=${language}&apiKey=28d0b4b4bb274b2bbebd8ffbf85a657c`);
    response = await response.json();
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
      setTotalResult(response.totalResult)
    }
  }

  let fetchData = async () => {
    setPage(p+1);
      let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize${size}&sortBy=publishedAt&language=${language}&apiKey=28d0b4b4bb274b2bbebd8ffbf85a657c`);
      response = await response.json();
      if (response.articles) {
        setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
      }
  };

  useEffect(()=>{
    getAPIData();
  },[language,q])
  return (
    <>
      <div className="container-fluid my-3">
        <h5 className="background text-center p-2 text-capitalize">
          {q} News Articles
        </h5>
        <InfiniteScroll className="text"
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResult}
          loader={
            <div className="my-3 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {
            articles.map((item, index) => {
              return  <NewsItem
                  key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                />
            })
            }
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};


export default Home;
