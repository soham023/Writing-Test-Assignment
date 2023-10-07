import React from "react";

import FlexColumn1 from "./FlexColumn1";
import FlexColumn2 from "./FlexColumn2";
import FlexRow from "./FlexRow";
import WritingTest from "./WritingTest";
const ReportingPage = () => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <div>
        <WritingTest />
      </div>
      <div className="horizontal-component">
        <div className="vertical-component">
          <FlexColumn1 />
          <FlexColumn2 />
        </div>

        <div className="horizontal-component2">
          <FlexRow/>
        </div>
      </div>
    </div>
  );
};

export default ReportingPage;
