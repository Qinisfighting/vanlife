


export default function Income() {
    return (
        <div className="income-container">
           <h2>Income</h2>
           <p className="transaction-time">Last <span className="span1">30 days</span></p>
           <h1>€2,260</h1>
           <img alt="income_graph" src="../src/assets/income_graph.png" />
           <div className="transaction">
               <p className="transaction-title">Your transactions(3) <span className="span2">30 days</span></p>
               <hr />
               <div className="transaction-list">
                 <p className="transaction-nr">€720 <span className="span2">1/12/22</span></p>
                 <p className="transaction-nr">€560 <span className="span2">10/11/22</span></p>
                 <p className="transaction-nr">€980 <span className="span2">12/11/22</span></p>
               </div>
           </div>
        </div>
    )
}