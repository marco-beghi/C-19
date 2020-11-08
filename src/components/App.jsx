import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import covidData from "./Chart";


function App() {
  const [notes, setNotes] = useState([]);
  const [chartData, setChartData] = useState({});

  const updateCovidData = async (covidData) => {
    const res = await fetch(covidData);
    const cd = await res.json();
    console.log("Covid Data is :");
    console.log(cd);
    setChartData({
      labels: cd.data.map((x) => x.date),
      datasets: [
        {
          data: cd.data.map((x) => x.newCases)
        }
      ]
    });
  };

  function handleClick(e, inputNote, setNote, setTitle) {
    setNotes((previousNote) => {
      return [...previousNote, inputNote];
    });
    setNote("");
    setTitle("");

    updateCovidData(covidData);
    e.preventDefault();
  }

  function handleDelete(id) {
    console.log(id);
    setNotes((previousNotes) => {
      return previousNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea clicked={handleClick} />
      {console.log("Chart Data is: ")}
      {console.log(chartData)}
      {notes.map((note, index) => {
        console.log(note, index);
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.note}
            onDelete={handleDelete}
            covidData={chartData}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
