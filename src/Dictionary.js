import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword); //<= ("inside here") I can put to search  a default word i.e. heaven
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let shecodesApiKey = "3e0749b8afffdf1d4415b107e7b6efot";

    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;

    let headers = { Authorization: `Bearer ${shecodesApiKey}` };
    axios
      .get(shecodesApiUrl, { headers: headers })
      .then(handleShecodesResponse);
    // or
    //axios.get(shecodesApiUrl, {
    // headers: { Authorization: `Bearer ${shecodesApiKey}` },
    // })
    //.then(handleShecodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do You want search?</label>
            <br />
            <input
              type="search"
              placeholder="Type a word"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword} // <=defaultValue will show the searching default word
            />
          </form>
          <div className="hint">
            i.e. guarana, passion fruit, heaven, coding
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
