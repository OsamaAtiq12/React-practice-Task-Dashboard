import React from "react";
import "./Content.css";

function Content() {
  return (
    <>
      <div className="Container">
        <div className="inner-container">
          <p>Select Workflow</p>
          <select
            name="cars"
            className="Input-style"
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Workflow</option>
          </select>
          <p>Select Gateway</p>
          <select
            name="cars"
            className="Input-style"
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Gateway</option>
          </select>
          <p>Select Devices</p>
          <select
            name="cars"
            className="Input-style "
            id="cars"
            placeholder="Select Devices"
          >
            <option value="volvo">Select Devices</option>
          </select>
          <br />

          <div className="attachment">
            <p className="at">Attachments</p>
            <input
              placeholder="No file Chosen"
              className="Input-style2"
              classtype="text"
            />

            <a href="" className="btn-1">
              <pre className="ch">Choose File</pre>
            </a>
          </div>
        </div>

        <div className="issue-des">
          <h1 className="head-1">Issue Description</h1>
          <textarea
            placeholder="Type here..."
            className="text-des"
            name=""
            id=""
            cols="50"
            rows="20"
          ></textarea>
        </div>
        <a href="" className="btn-2">
          <pre className="ch">Report Issue</pre>
        </a>
      </div>
    </>
  );
}

export default Content;
