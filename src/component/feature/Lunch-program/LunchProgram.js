import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import httpGateaway from "../../shared/http-operation";
import EachProgram from "../EachProgram/EachProgram";
import "./LunchProgram.css";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useStateValue } from "../../../context/StateProvider";

function LunchProgram() {
  const [programList, setProgramList] = useState([]);
  const [lunchYears, setLunchYears] = useState([]);
  const [{ filterValue }, dispatch] = useStateValue();

  useEffect(() => {
    getFirstLunchPrograms();
  }, []);

  useEffect(() => {
    let arr = [];
    if (Object.keys(filterValue).length > 0) {
      if (filterValue.lunchYear != "") {
        arr.push({ key: "launch_year", value: filterValue.lunchYear });
      }
      if (filterValue.successfullLunch != "") {
        arr.push({
          key: "launch_success",
          value: filterValue.successfullLunch,
        });
      }
      if (filterValue.succesfullLand != "") {
        arr.push({ key: "land_success", value: filterValue.succesfullLand });
      }
      console.log(arr);
      getCustomlunchPrograms([{ key: "limit", value: "100" }, ...arr]);
    }else{
      getCustomlunchPrograms([{ key: "limit", value: "100" }]);
    }
  }, [filterValue]);

  const getCustomlunchPrograms = async (paramsdata) => {
    let result = await httpGateaway.getSpaceXLunchesData(paramsdata);
    setProgramList([...result]);
  };

  const getFirstLunchPrograms = async () => {
    getCustomlunchPrograms([{ key: "limit", value: "100" }]);
  };

  return (
    <div className="lunchProgram">
      <header className="program_title">
        <h2>SpaceX Lunch Programs</h2>
      </header>
      <div className="program_body">
        <aside>
          <FilterMenu />
        </aside>
        <section>
          <Container fluid>
            <Row>
              {programList.map((val, key) => {
                return (
                  <Col md="6" lg="3" key={key}>
                    <EachProgram  programData={val} />
                  </Col>
                );
              })}
              {programList.length == 0 ? (
                <Col className="text-center no_result">No Result</Col>
              ) : null}
            </Row>
          </Container>
        </section>
      </div>
      <footer>
        <div className="footer_content">Developed by:Rajanish</div>
      </footer>
    </div>
  );
}

export default LunchProgram;
