import React from "react";
import TableExample from "./Analysis";
import PieChart from "./Pie-Chart";
import "../App.css";
function FlexRow() {
  return (
    <div className="Flex-A">
      <div className="Flex-Row">Results</div>
      <h3 className="res">Results</h3>
      <h4 className="res">Score : 74% </h4>
      <div className="Flex-Row2">
        <div className="newDiv">
          <div className="divD">
            <PieChart />
          </div>

          <div className="divD">
            <div className="row1">
              <div className="navy-blue"></div>
              <div className="error">Correct Answer</div>
            </div>
            <div className="row1">
              <div className="morelight-blue"></div>
              <div className="error">Not Answered</div>
            </div>

            <div className="row1">
              <div className="light-blue"></div>
              <div className="error">Wrong</div>
            </div>
          </div>
        </div>
      </div>
      <div className="analysis">
        <TableExample />
      </div>
    </div>
  );
}

export default FlexRow;
