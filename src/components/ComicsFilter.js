import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ComicsFilter() {
  const [query, setQuery] = useState([]);
  const [active, setActive] = useState(false);
  const [comics, setComics] = useState("");

  function handleChange(e) {
    if (comics.indexOf(e.target.value) === -1) {
      if (comics === "") {
        setComics(e.target.value);
      } else {
        setComics(comics + " " + e.target.value);
      }
    } else {
      setComics(comics.replace(e.target.value, "").trim());
    }
    // console.log(comics.trim().replace(" ", "%2C"));

    console.log(comics);
  }

  useEffect(() => {
    if (active) {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?ts=1&limit=10&apikey=258159386a6b2926cdd666ca4dc065e5&hash=a808e3a90ff0aa824bdcb90c24ab7cba`
        )
        .then(function (response) {
          setQuery(response.data.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [active]);

  return (
    <div className="position-relative">
      <button
        className={`position-relative filter-button ${active ? "active" : ""}`}
        style={{ zIndex: 1 }}
        onClick={() => setActive(!active)}
      >
        <FontAwesomeIcon icon={faBookOpen} />
      </button>
      <div
        className={`filter-preview position-absolute right-0 left-0 d-flex flex-column rounded p-3${
          !active ? " d-none" : ""
        }`}
      >
        <div class="input-group my-3 position-relative flex-column">
          <div class="form-check">
            {query.map((query) => {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={query.id}
                    id={query.id}
                    onChange={(e) => handleChange(e)}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    {query.title}
                  </label>
                </div>
              );
            })}
            <button
              className="position-relative filter-button m-2"
              style={{ zIndex: 1 }}
              onClick={() => setActive(!active)}
            >
              Apply
            </button>
            <button
              className="position-relative filter-button m-2"
              style={{ zIndex: 1 }}
              onFocus={() => setActive(!active)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicsFilter;
