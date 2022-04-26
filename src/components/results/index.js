import './results.scss'

function Results ({ data }) {
  return(
    <section>
      <span><em>Results</em></span>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
