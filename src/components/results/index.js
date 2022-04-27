import './results.scss'

function Results({ data }) {
  return (
    <>
      {data ?
        <section>
          <span><em>Results</em></span>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </section> :
        <section>
          <span><em>Waiting on response. . .</em></span>
        </section>}
    </>
  );
}

export default Results;
