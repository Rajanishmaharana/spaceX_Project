import React from "react";
import "./Eachprogram.css";
function EachProgram({ programData }) {
  //  console.log(programData);
  return (
    <div className="eachMissionLayout">
      <div className="missionImage">
        <img src={programData.links.mission_patch} />
      </div>
      {/* End of mission_image */}

      <div className="mission_info">
        <div className="mission_title">
          <span>{programData.mission_name}</span>
          <span>&nbsp;#{programData.flight_number}</span>
        </div>

        <div className="mission_id">
          <div className="label">Mission Ids</div>
          <div className="list">
            <ul>
              {programData.mission_id.map((val) => {
                return <li className="text-secondary">{val}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="lunch_year">
          <div className="label">Launch Year: </div>
          <div className="label_value text-secondary">
            {programData.launch_year}
          </div>
        </div>
        <div className="successfull_lunch">
          <div className="label_container">
            <span className="label">Successfull Lunch:</span>
          </div>

          <div className="label_value text-secondary">
            {programData.launch_success ? "true" : "false"}
          </div>
        </div>
        <div className="successfull_landing">
          <span className="label">Successfull Landing:</span>
          <div className="label_value text-secondary">
            {programData?.rocket?.first_stage?.cores[0]?.land_success
              ? "true"
              : "false"}
          </div>
        </div>
      </div>
      {/* End if mission_info */}
    </div>
  );
}

export default EachProgram;
