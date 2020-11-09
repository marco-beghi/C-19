import React from "react";
import { Line } from "react-chartjs-2";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div>
        {console.log("props.covidData is :")}
        {console.log(props.covidData)}
        <Line data={props.covidData} width={10} height={6}
        options={
          {backgroundColor:'rgba(256, 0, 0, 100)'},
          {scales: {
              yAxes: [{
                  ticks: {
                  		reverse: false,
                      beginAtZero:false
                  }
              }],
              xAxes: [{
                  type:"time",
              		ticks: {
                  	reverse: false,
                    beginAtZero: false
                  }
              }]
          }
        }}
          />
      </div>
      <button
        className="note"
        onClick={() => props.onDelete(props.id)}
      >
        -
      </button>
    </div>
  );
}

export default Note;
