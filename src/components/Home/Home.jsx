import React, { useEffect, useState } from "react";
import MovieCard from "../CardComponent/MovieCard";
import.meta.env.TMDBTOKEN;

console.log(TMDBTOKEN);

function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDBTOKEN}`,
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const [imgurl, setImgurl] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const iterator = (num) => {
    console.log(num.original_title);
  };

  const getImage = (num) => {
    fetch(`${url}${num.poster}`)
      .then((res) => setImgurl(res))
      .catch((e) => console.log(e));

    return imgurl;
  };

  return (
    <>
      <div className="py-3">
        <div>
          <div className="grid grid-cols-3 gap-4">
            {data.map((num) => (
              <MovieCard
                image={getImage(num)}
                title={num.original_title}
                summary={num.summary}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
