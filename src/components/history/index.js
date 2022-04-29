import ReactJson from "react-json-view";
import './history.scss'

function History({ requestHistory }) {

  return (
    <section className="history-display">
      <span><em>Request History</em></span>
      <ReactJson src={requestHistory} collapsed={true} />
    </section>
  )

  /*
  <section data-testid="results-display">
    {data ?
      (<>
        <span><em>Results</em></span>
        <ReactJson src={data} />
      </>) :
      (<span><em>Waiting on response. . .</em></span>)
    }
  </section>
  */
}

export default History;