import './results.scss'
import ReactJson from 'react-json-view';

function Results({ data }) {
  return (
    <section data-testid="results-display">
      {data ?
        (<>
          <span><em>Results</em></span>
          <ReactJson src={data} name="response data" />
        </>) :
        (<span><em>Waiting on response. . .</em></span>)
      }
    </section>
  );
}

export default Results;
