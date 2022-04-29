import { useReducer, useEffect } from 'react';
import { propReducer } from './reducer';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  data: null,
  requestParams: null
}

function App() {

  let [state, dispatch] = useReducer(propReducer, initialState);

  const { requestParams, data } = state;

  const updateData = (payload) => dispatch({ propName: 'data', payload });

  const updateParams = (payload) => dispatch({ propName: 'requestParams', payload })

  const callApi = async (params) => {
    try {
      const response = await axios({
        method: params.method,
        url: params.url,
        data: params?.data
      })
      updateData(response.data);
    } catch (error) {
      updateData({ error: 'Bad response' });
    }
  }

  useEffect(() => {
    if (requestParams?.method && requestParams?.url) {
      callApi(requestParams)
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method}</div>
      <div>URL: {requestParams?.url}</div>
      <Form handleParams={updateParams} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
