import { InHouseExposureEvent, PersonData } from "./types";
import InHouseExposureQuestion from "./InHouseExposureQuestion";
import React from "react";
import { State } from "@hookstate/core/dist";

interface Props {
  person: PersonData;
  meaningfulInHouseExposures: PersonData[];
  relevantInHouseExposureEventsState: State<InHouseExposureEvent>[];
  eventSetterState: State<((date: string) => void) | undefined>;
}

export default function InHouseExposureQuestions(props: Props) {
  return (
    <>
      {props.meaningfulInHouseExposures.map((otherPerson, index) => {
        const inHouseExposureEventState = props.relevantInHouseExposureEventsState.find(
          (eventState: State<InHouseExposureEvent>) => {
            const event = eventState.get();
            return (
              event.quarantinedPerson === otherPerson.id ||
              event.contagiousPerson === otherPerson.id
            );
          }
        );
        if (inHouseExposureEventState) {
          return (
            <>
              <InHouseExposureQuestion
                key={props.person.id + "-" + index}
                id={props.person.id}
                index={index}
                person={props.person}
                otherPerson={otherPerson}
                inHouseExposureEventState={inHouseExposureEventState}
                eventSetterState={props.eventSetterState}
              />
              <hr />
            </>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
}
