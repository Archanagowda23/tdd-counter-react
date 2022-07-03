import React from "react";
import axios from "axios";

const TestAxios = (props) => {

// const TestAxios = ({ url }) => {
  const [data, setData] = React.useState();

 const fetchData = async () => {
    const response = await axios.get(props.url);
    console.log(response); 
    // const response = await axios.get(url);
    // setData(response.data.url);
    setData(response.data.login);
}

return (
    <>
    <button onClick={fetchData} data-testid='fetch-data'>Load Data</button>
       {data ? (
        <div data-testid="show-data">{data}</div>
       ): (
        <h1 data-testid="loading">Loading...</h1>
       )} 
    </>
  );
};
export default TestAxios;