import React from "react";
import { InHouseExposureEvent, PersonData } from "./types";
import { State } from "@hookstate/core/dist";

interface Props {
  id: number;
  index: number;
  otherPerson: PersonData;
  inHouseExposureEventState: State<InHouseExposureEvent>;
}

export default function InHouseExposureQuestion(props: Props) {
  const inHouseExposureEvent = props.inHouseExposureEventState.get();
  const isExposed = inHouseExposureEvent.exposed;
  const isOngoing = inHouseExposureEvent.ongoing;
  return (
    <div className="mb-3">
      <div className="custom-control custom-checkbox mb-3">
        <input
          className="custom-control-input"
          checked={isExposed}
          name={`crossExposure-${props.index}-checkbox-exposure`}
          id={`crossExposure-${props.id}-${props.index}-checkbox-exposure`}
          type="checkbox"
          onChange={() => props.inHouseExposureEventState.exposed.set(v => !v)}
        />
        <label
          className="custom-control-label"
          htmlFor={`crossExposure-${props.id}-${props.index}-checkbox-exposure`}
        >
          I was exposed to {props.otherPerson.name}
        </label>
      </div>
      {isExposed && (
        <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            checked={isOngoing}
            name={`crossExposure-${props.index}-checkbox-ongoing`}
            id={`crossExposure-${props.id}-${props.index}-checkbox-ongoing`}
            type="checkbox"
            onChange={() =>
              props.inHouseExposureEventState.ongoing.set(v => !v)
            }
          />
          <label
            className="custom-control-label"
            htmlFor={`crossExposure-${props.id}-${props.index}-checkbox-ongoing`}
          >
            My exposure to {props.otherPerson.name} is ongoing
          </label>
        </div>
      )}
      {isExposed && !isOngoing && (
        <>
          <label htmlFor={`crossExposure-${props.id}-${props.index}`}>
            Date exposed to {props.otherPerson.name}{" "}
            <span className="f6 fw3">mm/dd/yyyy</span>
          </label>
          <input
            className="form-control"
            value={inHouseExposureEvent.date}
            name={`crossExposure-${props.index}`}
            id={`crossExposure-${props.id}-${props.index}`}
            type="text"
            onChange={(e: React.BaseSyntheticEvent) =>
              props.inHouseExposureEventState.date.set(e.target.value)
            }
          />
        </>
      )}
    </div>
  );
}