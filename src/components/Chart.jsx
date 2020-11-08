import React, { useState } from "react";
const axios = require("axios");


let covidData;

const endpoint =
  "https://api.coronavirus.data.gov.uk/v1/data?" +
  "filters=areaType=nation;areaName=england&" +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

const fetchData = async () => {
  const response = await fetch(endpoint);
  const { data } = await response.json();
  console.log("fetchData Result is:");
  console.log(data);
  covidData = {
    labels: data.map((x) => x.date),
    datasets: [
      {
        data: data.map((x) => x.newCases)
      }
    ]
  };
  return covidData;
};

fetchData();

const getData = async (url) => {
  const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

  if (status >= 400) throw new Error(statusText);

  return data;
}; // getData

const main = async () => {
  const result = await getData(endpoint);

  //console.log(result);

  return result;
}; // main

const forPlotting = main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .then((res) => {
    covidData = {
      labels: res.data.map((x) => x.date),
      datasets: [
        {
          data: res.data.map((x) => x.newCases)
        }
      ]
    };
  });

export default endpoint;
