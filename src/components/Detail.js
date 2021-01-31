import React, { useState, useEffect } from "react";
import axios from "axios";

function Detail({ id, title }) {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=258159386a6b2926cdd666ca4dc065e5&hash=a808e3a90ff0aa824bdcb90c24ab7cba`
      )
      .then(function (response) {
        setQuery(response.data.data.results);
        console.log(query);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container-xxl ">
      <div
        className="d-flex justify-content-center"
        style={{ maxWidth: "25%", maxHeight: "25%" }}
      >
        <img
          src={`${query[0].thumbnail.path}.jpg`}
          className="card-img-top"
          alt={query[0].name}
          style={{ minWidth: "232px", minHeight: "232px" }}
        />
        <h2>{query[0].name}</h2>
      </div>
    </div>
  );
}

export default Detail;
