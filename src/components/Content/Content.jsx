import React from "react";
import "./Content.css";
import Main_page from "../Main_page/Main_page";

function Content() {
  return (
    <>
      <Main_page />
      <h1 className="Re-issue">Report Issue</h1>
      <div className="Container-c">
        <div className="inner-container-c">
          <p>Select Workflow</p>
          <select
            name="cars"
            className="Input-style-c"
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Workflow</option>
          </select>
          <p>Select Gateway</p>
          <select
            name="cars"
            className="Input-style-c"
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Gateway</option>
          </select>
          <p>Select Devices</p>
          <select
            name="cars"
            className="Input-style-c "
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Devices</option>
          </select>
          <br />

          <div className="attachment-c">
            <p className="at">Attachments</p>
            <input
              placeholder="No file Chosen"
              className="Input-style2-c"
              classtype="text"
            />

            <a href="" className="btn-1-c">
              <pre className="ch">Choose File</pre>
            </a>
          </div>
        </div>

        <div className="issue-des-c">
          <h1 className="head-1-c">Issue Description</h1>
          <textarea
            placeholder="Type here..."
            className="text-des"
            name=""
            id=""
            cols="50"
            rows="20"
          ></textarea>
        </div>
        <a href="" className="btn-2-c">
          <pre className="ch-c">Report Issue</pre>
        </a>
      </div>
    </>
  );
}

export default Content;
