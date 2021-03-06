import { flow, remove, concat } from "lodash/fp";
import { CovidEventName, PersonData } from "./types";

export function replace<T>(array: Array<T>, old: T, updated: T): Array<T> {
  return flow(
    remove(e => e === old),
    concat([updated])
  )(array);
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function isContagious(person: PersonData) {
  return Boolean(
    person.covidEvents[CovidEventName.PositiveTest] ||
      person.covidEvents[CovidEventName.SymptomsStart]
  );
}
