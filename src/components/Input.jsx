import { useState } from "react";
import {nanoid} from 'nanoid';

export const Input = ({ subFunc }) => {
  const [form, SetForm] = useState({
    title: "",
    time: "",
    instruct: "",
    ingred: "",
  });

  const handleChange = (e) => {
    SetForm({
      ...form,
      [e.target.name]: e.target.value,
      id : nanoid(7)
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          subFunc(form);
        }}
      >
        <label>Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label>Ingredients</label>
        <input
          name="ingred"
          type="text"
          placeholder="tomato, potato, onions, etc"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label>Time to cook (in min)</label>
        <input
          name="time"
          type="Number"
          placeholder="Enter time"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label>Instructions</label>
        <input
          name="instruct"
          type="text"
          placeholder="add instructions"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

// every recipe has title, ingredients, time to cook, an image and instructions. any extra thing you want to add is accetable.
