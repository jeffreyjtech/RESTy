import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {
  
  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  
  useEffect(() => {
    callApi(requestParams)
  }, [requestParams]);

  const callApi = async (params) => {
    const response = await axios({
      method: params.method,
      url: params.url,
      data: params?.data
    })
    setData(response.data);
  }

  const handleParams = (formParams) => {
    // mock output
    setRequestParams(formParams);
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleParams={handleParams} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
