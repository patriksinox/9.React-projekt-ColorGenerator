import Farba from "./Farba";
import React from "react";
import { useState } from "react";
import Values from "values.js";

function App() {
  const [farba, setFarba] = useState("");
  const [error, setError] = useState();
  const [farby, setFarby] = useState(new Values("green").all(10));

  const handleForm = (e) => {
    e.preventDefault();
    try {
      const color = new Values(farba).all(10);
      setError(false);
      setFarby(color);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <>
      <div className="container text-center">
        <section>
          <form onSubmit={handleForm} className="mt-5 mb-5">
            <label htmlFor="farba">
              <h2>Generátor Farieb</h2>
            </label>
            <input
              className={error ? "error" : null}
              type="text"
              value={farba}
              name="farba"
              id="farba"
              placeholder="zadaj farbu"
              onChange={(e) => setFarba(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Generuj!
            </button>
          </form>
        </section>
        <h3 className="error-msg">{error && "Zadal si zlú farbu!"}</h3>
        <div className="farbyContainer">
          {farby.map((farba, index) => {
            return (
              <Farba
                key={index}
                {...farba}
                hexColor={farba.hex}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
//onSubmit={handleForm}
