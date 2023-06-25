import income_graph from "../../assets/income_graph.png"

export default function Income() {
    const isLoggedIn = localStorage.getItem("loggedin")
    return (
        !isLoggedIn?
        <div className="nexted-container">
           <h2>Income</h2>
           <p className="transaction-time">Last <span className="span1">30 days</span></p>
           <h1>€2,260</h1>
           <img alt="income_graph" src={income_graph} />
           <div className="nexted-container-main">
               <p className="main-title">Your transactions(3) <span className="span2">Last 30 days</span></p>
               <hr />
               <div className="transaction-list">
                 <p className="transaction-nr">€720 <span className="span2">1/12/22</span></p>
                 <p className="transaction-nr">€560 <span className="span2">10/11/22</span></p>
                 <p className="transaction-nr">€980 <span className="span2">12/11/22</span></p>
               </div>
           </div>
        </div>
        :
        <div className="nexted-container">
           <h2>Income</h2>
           <p className="transaction-time">Last <span className="span1">30 days</span></p>
           <h1>€0</h1>
           <div className="nexted-container-main">
               <p className="main-title">Your transactions(0) <span className="span2">Last 30 days</span></p>
               <hr />
           </div>
        </div>
    )
}