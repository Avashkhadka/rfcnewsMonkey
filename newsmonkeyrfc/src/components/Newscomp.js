import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

export default function Newscomp() {
  const [articles, updatearticle] = useState([]);
  const [page, setpage] = useState(1);
  const [totalres,settotalres]=useState()
  const handleNextclick = () => {
    setpage(page + 1);
  };
  const handlePrevclick = () => {
    setpage(page - 1);
  };



  useEffect(() => {
    const fetchapi = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=140c6d53fff84726af8c83f961d27c98&page=${page}&pagesize=20`;
      let response = await fetch(url);
      let data = await response.json();
      updatearticle(data.articles);
      settotalres(data.totalResults);
    };
    fetchapi();
  }, [page]);

  return (
    <div className="container">
      <h1>News Monkey - Top headline</h1>
      <div className="row">
        {articles.map((e) => {
          return (
            <div className="col-md-4" key={e.url}>
              <Newsitem
                title={e.title ? e.title.slice(0, 40) + "..." : "no data found"}
                description={
                  e.description
                    ? e.description.slice(0, 40) + "..."
                    : "no data found"
                }
                src={e.url}
              />
            </div>
          );
        })}
      </div>
      <div className="component">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-primary"
            onClick={handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page+1>Math.ceil(totalres/20)}
            className="btn btn-primary"
            onClick={handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
