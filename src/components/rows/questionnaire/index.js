import React, { useEffect, useState } from "react";

import { questionnaireData } from "../../../data/questionnaire";
import { Questions } from "../../molecules/questions";
import { Button } from "../../atoms/button";

import bg from "../../../assets/bg.png";

import "./style.css";

export const Questionnaire = () => {
  const {
    name = "",
    description = "",
    questions = [],
  } = questionnaireData.questionnaire;

  const [formData, setFormData] = useState({});
  const [successMessage, showSucssMessage] = useState(false);

  const handleChange = (e, name, jumps = []) => {
    setFormData({ ...formData, [name]: e.target.value });
    if (jumps.length > 0) {
      jumps.forEach((jump) => {
        if (jump.conditions && jump.conditions[0].value === e.target.value) {
          document.getElementById(jump.destination.id) &&
            document.getElementById(jump.destination.id).scrollIntoView({
              behavior: "smooth",
            });
        }
      });
    }
  };

  const obseverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-right");
      }
    });
  };

  useEffect(() => {
    const targetElement =
      global && global.document.querySelectorAll(".animate");
    const options = {
      threshold: 1.0,
    };
    const myObserver = new IntersectionObserver(obseverCallback, options);
    targetElement.forEach((item) => {
      myObserver.observe(item);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("formdata----------", formData); // getting the form data
    showSucssMessage(true);
  };

  return (
    <div className="wrapper">
      <div className="left-content">
        <figure className="img-wrapper">
          <img src={bg} alt="background" className="app-image" />
        </figure>
      </div>
      <div className="right-content">
        <div className="into-card">
          {name && <h1 className="name">{name}</h1>}
          {description && <p className="description"> {description}</p>}
        </div>
        <form onSubmit={handleSubmit} className="question-wrapper">
          {questions.map((question, index) => {
            return (
              <Questions
                question={question}
                onChange={handleChange}
                identifier={formData[question.identifier]}
                key={`question-${index}`}
              />
            );
          })}
          {!successMessage && (
            <div className="submit animate">
              <Button type="submit" text="Submit" />
            </div>
          )}
        </form>
        {successMessage && (
          <div className="message-wrapper">
            <h4 className="thank-you">Thank You!</h4>
            <p className="message">Your submission has been sent.</p>
          </div>
        )}
      </div>
    </div>
  );
};
