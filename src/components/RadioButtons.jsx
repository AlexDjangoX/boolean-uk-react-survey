import React from "react";

const RadioButtons = ({ onChange }) => {
  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          // checked={formData.color === "1"}
          onChange={onChange}
        />
        <label for="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          // checked={formData.color === "2"}
          onChange={onChange}
        />
        <label for="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          // checked={formData.color === "3"}
          onChange={onChange}
        />
        <label for="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          // checked={formData.color === "4"}
          onChange={onChange}
        />
        <label for="color-four">4</label>
      </li>
    </ul>
  );
};

export default RadioButtons;
