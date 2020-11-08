const endpoint =
  "https://api.coronavirus.data.gov.uk/v1/data?" +
  "filters=areaType=nation;areaName=england&" +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

export default endpoint;
