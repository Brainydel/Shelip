import React, { useState } from "react";

export default function SearchBox(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="search">
        <input
          type="text"
          name="q"
          placeholder="Search Shelipton..."
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
