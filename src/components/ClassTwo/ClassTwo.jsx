import React, { useState, useEffect } from "react";

const ClassTwo = () => {
  const [lecture, setLecture] = useState(1);
  const [books, setBooks] = useState(1);

  const clickHandle = () => {
    setLecture((prev) => {
      return prev + 1;
    });
  };

  const booksHandle = () => {
    setBooks((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    console.log("useeffect running !");
  }, [lecture]);

  useEffect(() => {
    // setInterval(() => {
    //   console.log(Date.now());
    // }, 1000);
  }, []);

  return (
    <div className="classTwo">
      <div>Lecture no: {lecture}</div>
      <div>Books no: {books}</div>
      <button onClick={clickHandle}>Update me!</button>
      <button onClick={booksHandle}>Update books!</button>
    </div>
  );
};

export default ClassTwo;
