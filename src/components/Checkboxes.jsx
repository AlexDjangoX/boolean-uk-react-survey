import React from "react";

const Checkboxes = ({ onChange, formData }) => {
  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={formData.swimming}
            onChange={onChange}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            checked={formData.bathing}
            onChange={onChange}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            checked={formData.chatting}
            onChange={onChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            checked={formData.noTime}
            onChange={onChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
};

export default Checkboxes;
