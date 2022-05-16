import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

import { initialData } from "../Utils";

const baseUrl = "http://localhost:3000";

async function updateLocalServer(el, id) {
  const opts = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...el, id }),
  };

  fetch(`${baseUrl}/data`, opts)
    .then((res) => res.json())
    .then((data) => {});
}

const Form = ({
  setUserDataApp,
  formData,
  setFormData,
  setEditing,
  editing,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      const opts = {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      };

      fetch(`${baseUrl}/data/${formData.id}`, opts)
        .then((res) => res.json())
        .then((data) => {});

      setUserDataApp((prevArr) => {
        const updatedArr = prevArr.map((item) => {
          if (item.id === formData.id) {
            return formData;
          }
          return item;
        });
        return updatedArr;
      });
      setEditing(false);
    } else {
      const id = Math.random();
      setUserDataApp((previous) => [...previous, { ...formData, id }]);
      updateLocalServer(formData, id);
    }
    setFormData(initialData);
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    console.log(name, type, value, checked);

    if (name === "color") {
      setFormData({ ...formData, rating: value });
    }
    if (name === "review" && type === "textarea") {
      setFormData({ ...formData, review: value });
    }
    if (name === "username" && type === "text") {
      setFormData({ ...formData, userName: value });
    }
    if (name === "email" && type === "email") {
      setFormData({ ...formData, email: value });
    }

    if (name === "spend-time") {
      if (checked) {
        setFormData({ ...formData, value: checked, noTime: !checked });
        if (!formData.timeSpent.includes(value))
          setFormData({
            ...formData,
            [value]: checked,
            timeSpent: [...formData.timeSpent, value],
          });
      } else {
        setFormData({ ...formData, value: !checked });
        let filteredArray = formData.timeSpent.filter((el) => el !== value);
        setFormData({
          ...formData,
          [value]: checked,
          timeSpent: [...filteredArray],
        });
      }
    }
    if (name === "spend-time" && value === "noTime") {
      setFormData({
        ...formData,
        [value]: !checked,
        noTime: checked,
        swimming: !checked,
        bathing: !checked,
        chatting: !checked,
        timeSpent: [value],
      });
      if (!checked) setFormData({ ...formData, noTime: !checked });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck color?</h3>
        <RadioButtons onChange={handleChange} formData={formData} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes onChange={handleChange} formData={formData} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <input
        className="form__submit"
        type="submit"
        value={editing ? "Update Survey" : "Submit Survey!!"}
      />
    </form>
  );
};

export default Form;
