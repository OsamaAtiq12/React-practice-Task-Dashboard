import React from "react";
import "./Content.css";
import Main_page from "../Main_page/Main_page";
import Axios from "axios";

function Content() {
  const url = "http://3.142.248.227/mst/IncomingCalls/ReceiveJsonData";
  const [data, setData] = React.useState({
    Workflow: "",
    Gateway: "",
    Devices: "",
    Issuedes: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      Workflow: data.Workflow,
      Gateway: data.Gateway,
      Devices: data.Devices,
      Issuedes: data.Issuedes,
    }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
      <Main_page />
      <h1 className="Re-issue">Report Issue</h1>
      <div className="Container-c">
        <div className="inner-container-c">
          <form action=" " onSubmit={(e) => submit(e)}>
            <p>Select Workflow</p>
            <select
              onChange={(e) => handle(e)}
              value={data.Workflow}
              className="Input-style-c"
              id="Workflow"
            >
              <option>Select Workflow</option>
              <option value="Workflow 1">Select Workflow 1</option>
              <option value="Workflow 2">Select Workflow 2</option>
              <option value="Workflow 3">Select Workflow 3</option>
            </select>
            <p>Select Gateway</p>
            <select
              onChange={(e) => handle(e)}
              className="Input-style-c"
              id="Gateway"
              value={data.Gateway}
              placeholder="Select Devices"
            >
              <option>Select Gateway</option>
              <option value="GATEWAY 1">GATEWAY 1</option>
              <option value="GATEWAY 2">GATEWAY 2</option>
              <option value="GATEWAY 3">GATEWAY 3</option>
            </select>
            <p>Select Devices</p>
            <select
              onChange={(e) => handle(e)}
              className="Input-style-c "
              value={data.Devices}
              id="Devices"
              placeholder="Select Devices"
            >
              <option>Select Devices</option>
              <option value="Devices 1">Select Devices 1</option>
              <option value="Devices 2">Select Devices 2</option>
              <option value="Devices 3">Select Devices 3</option>
            </select>
            <br />

            <div className="issue-des-c">
              <h1 className="head-1-c">Issue Description</h1>
              <textarea
                onChange={(e) => handle(e)}
                value={data.Issuedes}
                placeholder="Type here..."
                className="text-des"
                name=""
                id="Issuedes"
                cols="50"
                rows="20"
              ></textarea>
            </div>
            <button type="submit" className="btn-2-c">
              Report Issue
            </button>
          </form>
        </div>
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
    </>
  );
}

export default Content;
