import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Pagination from "./Components/Pagination";
import Records from "./Components/Records";
import.meta.env;
function FetchDataFromAPI(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => setData(Data.articles));
  }, [url]);
  return data;
}

function News() {
  const result = FetchDataFromAPI(
    `https://newsapi.org/v2/everything?q=crypto&apiKey=${'d0f92e35a543425198cbafac0b3419b3'}`
  );
  console.log(result);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = result.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(result.length / recordsPerPage);
  // console.log(currentRecords);
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <Records data={currentRecords} />
      <br />
      <br />

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default News;
