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
import History from './components/history';

const initialState = {
  data: null,
  requestParams: null,
  requestHistory: [] 
  // history will be an array of history objects. 
  // history objects contain the request params and returned data from a request instance
}


function App() {

  let [state, dispatch] = useReducer(propReducer, initialState);

  const { requestParams, data, requestHistory } = state;

  const updateData = (payload) => dispatch({ propName: 'data', payload });
  const updateParams = (payload) => dispatch({ propName: 'requestParams', payload })
  const addHistory = (payload) => dispatch({ propName: 'requestHistory', payload: [...requestHistory, payload] })

  const callApi = async (params) => {
    try {
      const response = await axios({
        method: params.method,
        url: params.url,
        data: params?.data
      })
      updateData(response.data);
      addHistory({ data: response.data, params})
    } catch (error) {
      console.error(error)
      let errorDisplayObject = { 
        error: error.name, 
        status: error?.response?.status,
        requestUrl: error?.request?.responseURL
      }
      updateData(errorDisplayObject);
      addHistory({...errorDisplayObject, params})
    }
  }

  useEffect(() => {
    if (requestParams?.method && requestParams?.url) {
      callApi(requestParams)
    }
  });

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method}</div>
      <div>URL: {requestParams?.url}</div>
      <Form handleParams={updateParams} />
      <div style={{"display": "flex"}}>
        <Results data={data} />
        <History requestHistory={requestHistory} />
      </div>
      <Footer />
    </>
  );
}

export default App;
