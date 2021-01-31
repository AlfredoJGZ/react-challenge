import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function NameFilter() {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState([]);
  const [input, setInput] = useState(" ");

  useEffect(() => {
    if (focus) {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${input}&orderBy=name&limit=10&apikey=258159386a6b2926cdd666ca4dc065e5&hash=a808e3a90ff0aa824bdcb90c24ab7cba`
        )
        .then(function (response) {
          setQuery(response.data.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value.trim());
    console.log(input);
  }

  return (
    <div class="input-group my-3 position-relative">
      <span class="input-group-text" id="basic-addon1">
        <FontAwesomeIcon icon={faSearch} color="#FFFFFF" />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Name"
        aria-label="Name"
        aria-describedby="basic-addon1"
        value={input}
        onFocus={() => setFocus(true)}
        onChange={(e) => handleChange(e)}
      />
      <div
        className={`filter-preview position-absolute right-0 left-0 d-flex flex-column rounded p-3${
          !focus ? " d-none" : ""
        }`}
      >
        {query.map((query) => {
          return (
            <a className="p-2" href="/">
              {query.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NameFilter;
