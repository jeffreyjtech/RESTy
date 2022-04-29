import ReactJson from "react-json-view";
import './history.scss'

function History({ requestHistory }) {

  return (
    <section className="history-display">
      <span><em>Request History</em></span>
      <ReactJson src={requestHistory} collapsed={true} name="Request history"/>
    </section>
  )
}

export default History;