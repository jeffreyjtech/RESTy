import './results.scss'
import ReactJson from 'react-json-view';

function Results({ data }) {
  return (
    <>
      {data ?
        <section>
          <span><em>Results</em></span>
          <ReactJson src={data} />
        </section> :
        <section>
          <span><em>Waiting on response. . .</em></span>
        </section>}
    </>
  );
}

export default Results;
