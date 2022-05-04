import React from "react";

import { Label } from "../../atoms/label";
import { MultipleChoiceField } from "../../atoms/multiple-choice-field";
import { InputField } from "../../atoms/text-field";
import { TextAreaField } from "../../atoms/text-area";

import "./style.css";

export const Questions = ({ question, onChange, identifier }) => {
  const getInputField = (question) => {
    switch (question.question_type) {
      case "multiple choice":
        return (
          question.choices &&
          question.choices.map((choice, index) => {
            return (
              <MultipleChoiceField
                choice={choice}
                onChange={onChange}
                checked={identifier == choice.value}
                name={question["identifier"]}
                jumps={question.jumps}
                key={`input-${index}`}
              />
            );
          })
        );
      case "text-area":
        return (
          <TextAreaField
            name={question["identifier"]}
            rows={"5"}
            onChange={onChange}
          />
        );
      case "text":
        return (
          <InputField
            type="text"
            name={question["identifier"]}
            onChange={onChange}
          />
        );
      case "email":
        return (
          <InputField
            type="email"
            name={question["identifier"]}
            onChange={onChange}
            required={question.required}
            placeholder="Email Id"
          />
        );
      default:
        return (
          <InputField
            type="text"
            name={question["identifier"]}
            onChange={onChange}
          />
        );
    }
  };
  if (question)
    return (
      <fieldset id={question["identifier"]} className="animate question">
        <Label text={question.headline} />
        {getInputField(question)}
      </fieldset>
    );
};
