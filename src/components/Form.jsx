import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

const initialData = {
  swimming: false,
  bathing: false,
  chatting: false,
  noTime: false,
  review: "",
  userName: "",
  email: "",
  color: "",
};

const Form = ({ saveFormData }) => {
  const [formData, setFormData] = useState(initialData);
  const [dataList, setDataList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataList([...dataList, formData]);
    saveFormData({ ...dataList });
    setFormData({ ...initialData });
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    console.log(name, type, value, checked);

    if (name === "review" && type === "textarea") {
      setFormData({ ...formData, review: value });
    }
    if (name === "username" && type === "text") {
      setFormData({ ...formData, userName: value });
    }
    if (name === "email" && type === "email") {
      setFormData({ ...formData, email: value });
    }
    if (name === "color" && type === "radio") {
      setFormData({ ...formData, color: value });
    }
    if (name === "swimming") {
      if (checked) setFormData({ ...formData, swimming: true, noTime: false });
      if (!checked) setFormData({ ...formData, swimming: false });
    }
    if (name === "bathing") {
      if (checked) setFormData({ ...formData, bathing: true, noTime: false });
      if (!checked) setFormData({ ...formData, bathing: false });
    }
    if (name === "chatting") {
      if (checked) setFormData({ ...formData, chatting: true, noTime: false });
      if (!checked) setFormData({ ...formData, chatting: false });
    }
    if (name === "noTime") {
      if (checked) {
        setFormData({
          ...formData,
          swimming: false,
          bathing: false,
          chatting: false,
          noTime: true,
        });
        if (!checked) setFormData({ ...formData, noTime: false });
      }
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
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
};

export default Form;
