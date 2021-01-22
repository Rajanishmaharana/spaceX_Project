import React, { useState, useEffect } from "react";
import "./FilterMenu.css";
import { Row, Col } from "react-bootstrap";
import { useStateValue } from "../../../context/StateProvider";

function FilterMenu({ lunchYears }) {
  // console.log(lunchYears);

  const [programFilter, setProgramFilter] = useState({
    lunchYear: "",
    successfullLunch: "",
    succesfullLand: "",
  });
  const [{filterValue}, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({ type: "CHANGE_FILTER", value: programFilter });
  }, [programFilter]);

  return (
    <div className="filter_menu_layout">
      <h5>
        <strong>Filters</strong>
      </h5>

      <div className="lunch_year_list">
        <div className="title_filter">
          <span>Lunch Year</span>
        </div>
        <div className="filter_option">
          <Row>
            {new Array(15).fill("").map((val, key) => {
              return (
                <Col xs="6" className="text-center" key={key}>
                  <button
                    className="filter_button"
                    style={{
                      background:
                        programFilter.lunchYear === 2006 + key
                          ? "#7cba01"
                          : "#c5e09b",
                    }}
                    onClick={(e) =>
                      setProgramFilter({
                        ...programFilter,
                        lunchYear: 2006 + key,
                      })
                    }
                  >
                    {2006 + key}
                  </button>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="title_filter">
          <span>Successful Lunch</span>
        </div>
        <div className="filter_option">
          <Row>
            <Col className="text-center">
              <button
                className="filter_button"
                style={{
                  background:
                    programFilter.successfullLunch === "true"
                      ? "#7cba01"
                      : "#c5e09b",
                }}
                onClick={(e) =>
                  setProgramFilter({
                    ...programFilter,
                    successfullLunch: "true",
                  })
                }
              >
                True
              </button>
            </Col>
            <Col className="text-center">
              <button
                className="filter_button"
                style={{
                  background:
                    programFilter.successfullLunch === "false"
                      ? "#7cba01"
                      : "#c5e09b",
                }}
                onClick={(e) =>
                  setProgramFilter({
                    ...programFilter,
                    successfullLunch: "false",
                  })
                }
              >
                False
              </button>
            </Col>
          </Row>
        </div>
        <div className="title_filter">
          {" "}
          <span>Successful Landing</span>
        </div>
        <div className="filter_option">
          <Row>
            <Col className="text-center">
              <button
                className="filter_button"
                style={{
                  background:
                    programFilter.succesfullLand === "true"
                      ? "#7cba01"
                      : "#c5e09b",
                }}
                onClick={(e) =>
                  setProgramFilter({ ...programFilter, succesfullLand: "true" })
                }
              >
                True
              </button>
            </Col>
            <Col className="text-center">
              <button
                className="filter_button"
                style={{
                  background:
                    programFilter.succesfullLand === "false"
                      ? "#7cba01"
                      : "#c5e09b",
                }}
                onClick={(e) =>
                  setProgramFilter({
                    ...programFilter,
                    succesfullLand: "false",
                  })
                }
              >
                False
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default FilterMenu;
