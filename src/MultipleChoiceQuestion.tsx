import React, { useState } from "react";
import { parse, format } from "date-fns";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@reach/disclosure";

interface Props {
  id: number;
  questionText: string;
  checked: boolean;
  onChange: (e: React.BaseSyntheticEvent) => void;
  tooltip?: JSX.Element;
}

export default function MultipleChoiceQuestion(props: Props) {
  return (
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        checked={props.checked}
        id={`checkbox-${props.id}-${props.questionText}`}
        type="checkbox"
        onChange={props.onChange}
      />
      <Disclosure>
        <label
          className="custom-control-label"
          htmlFor={`checkbox-${props.id}-${props.questionText}`}
        >
          <div
            style={{
              fontFamily: "Helvetica",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "36px",
              letterSpacing: "0em",
              textAlign: "left"
            }}
          >
            {props.questionText}
            {props.tooltip && (
              <DisclosureButton>
                <i
                  aria-hidden="true"
                  className="px-1 fas fa-question-circle link hover-dark-blue gray"
                ></i>
              </DisclosureButton>
            )}
          </div>
        </label>
        {props.tooltip && (
          <DisclosurePanel>
            <div className="f5 gray">{props.tooltip}</div>
          </DisclosurePanel>
        )}
      </Disclosure>
    </div>
  );
}
