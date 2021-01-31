import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { FixedSizeList as List } from "react-window";
import NameFilter from "../components/NameFilter";
import ComicsFilter from "../components/ComicsFilter";
import axios from "axios";

function Section({ title }) {
  const [query, setQuery] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=258159386a6b2926cdd666ca4dc065e5&hash=a808e3a90ff0aa824bdcb90c24ab7cba"
      )
      .then(function (response) {
        setQuery(response.data.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [title]);

  return (
    <div className="container-xxl">
      <NameFilter />
      <ComicsFilter />
      <h2 className="mt-4">{title}</h2>
      <List
        className="list mt-4"
        height={510}
        itemCount={query.length}
        itemSize={250}
        width={1000}
        layout="horizontal"
        itemData={query}
      >
        {Card}
      </List>
    </div>
  );
}

export default Section;
