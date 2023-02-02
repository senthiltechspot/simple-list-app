import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Pagination from "./Components/Pagination";
import Records from "./Components/Records";

function FetchDataFromAPI(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Data) => setData(Data));
  }, [url]);
  return data;
}

function App() {
  const result = FetchDataFromAPI("https://jsonplaceholder.typicode.com/users");
  // console.log(result);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = result.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(result.length / recordsPerPage);
  // console.log(currentRecords);
  return (
    <div className="App">
      <NavBar />
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

export default App;
