import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect( () => {
    const theCounter = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    setIntervalId(theCounter);

    return () => {
      clearInterval(theCounter);
    };
  }, []);

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hola contador!</h1>
      <p>
        <img src={rigoImage} alt="Rigo" />
      </p>
      <p>Contador hasta que lo pares: {counter}</p>
      <button className="btn btn-success" onClick={stopInterval}>¡¡Basta de contar!!</button>
    </div>
  );
};

export default Home;

