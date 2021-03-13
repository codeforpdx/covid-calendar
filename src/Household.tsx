import React, { useRef } from "react";
import { InHouseExposure, PersonData } from "./types";
import Person from "./Person";
import { State } from "@hookstate/core";
import { computeHouseHoldQuarantinePeriod } from "./calculator";
import { Link } from "react-router-dom";
import { downloadEvents } from "./calendar";

interface Props {
  addNewPerson: () => void;
  membersState: State<PersonData[]>;
  inHouseExposureEventsState: State<InHouseExposure[]>;
  editingHouseholdState: State<boolean>;
  height: State<number>;
}

export default function Household(props: Props) {
  const editingHousehold = props.editingHouseholdState.get();
  const members = props.membersState.get();
  const inHouseExposureEvents = props.inHouseExposureEventsState.get();
  const guidances = computeHouseHoldQuarantinePeriod(
    members,
    inHouseExposureEvents
  );

  const editingPersonRef = useRef<HTMLDivElement>(null);

  function addPerson(e: React.BaseSyntheticEvent) {
    e.stopPropagation();
    props.editingHouseholdState.set(true);
    props.addNewPerson();
  }


  function renderTitle() {
    if (editingHousehold) {
      return (
        <>
          <h2
            style={{
              fontFamily: "Helvetica",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "56px",
              letterSpacing: "-0.01em",
              textAlign: "left"
            }}
          >
            Tell us about yourself and each person you live with
          </h2>
          <p
            className="lead"
            style={{
              fontFamily: "Helvetica",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "36px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#000000"
            }}
          >
            Thank you for doing your part to keep our community safe! For help
            with a question, tap "?"
          </p>
        </>
      );
    } else {
      return (
        <>
          <h1>Your recommendation</h1>
          <p className="lead text-muted">
            The guidance given in this app is based on the latest CDC guidelines
            for protecting yourself and others from the spread of COVID-19. The
            same information is available on their{" "}
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html">
              COVID-19 webpage
            </a>
            .
          </p>
        </>
      );
    }
  }

  function renderAction() {
    if (members.length) {
      if (editingHousehold) {
        return (
          <div className="">
          <button
            className="white get-recommendation-button"
            onClick={(e: React.BaseSyntheticEvent) => {
              props.editingHouseholdState.set(false);
              window.scrollTo(0,0);
            }}
          >
            Get recommendation{" "}
          </button>
          </div>
        );
      } else {
        return (
          <div className="d-flex justify-content-between">
            <button
              className="my-3 update-button col-md-5"
              onClick={() => {
                props.editingHouseholdState.set(true);
              }}
            >
              UPDATE ANSWERS
            </button>
            <div className="col-md-2"></div>
            <button
              className="my-3 download-button col-md-5"
              onClick={() => {
                downloadEvents(guidances);
              }}
            >
              DOWNLOAD TO CALENDAR
            </button>
          </div>

        );
      }
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          className={"col-md-12"}
          style={{
            backgroundColor: "#fff",
            minHeight: props.height.get() + "px"
          }}
        >
          <div className={"container"}>
            <div className={"my-3"} />
            {renderTitle()}
            <div>
              {props.membersState.map((personState: State<PersonData>) => {
                const person = personState.get();
                const id = person.id;
                const personGuidance = guidances.find(c => c.person.id === id);
                if (personGuidance) {
                  return (
                    <Person
                      key={id}
                      personState={personState}
                      membersState={props.membersState}
                      inHouseExposureEventsState={
                        props.inHouseExposureEventsState
                      }
                      editingHouseholdState={props.editingHouseholdState}
                      guidance={personGuidance}
                      editingPersonRef={editingPersonRef}
                      addNewPerson={props.addNewPerson}
                    />
                  );
                }
              })}
            </div>
            {editingHousehold && (
              <button className="mb-2" onClick={addPerson}>
                <div style={{display: "flex"}}>
                <div style={{width:"44px"}}> {/*hold the space open for no image load-time jump. There's even a teeny delay for an svg load, and that's dumb, so this stays.  */}
                <img
                  src={process.env.PUBLIC_URL + "/circle-plus.svg"}
                  style={{ marginLeft: "-0.05rem" }}
                />
                </div>
                <span className={"add-another-person"}>
                  Add another person &nbsp;
                </span>
                </div>
              </button>
            )}
            {renderAction()}
          </div>
        </div>
      </div>
    </>
  );
}
