import React, { useState, useEffect } from "react";

function Farba({ hexColor, weight, index }) {
  const [skopirovane, setSkopirovane] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSkopirovane(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [skopirovane]);

  return (
    <article
      onClick={() => {
        navigator.clipboard.writeText(`#${hexColor}`);

        return setSkopirovane(true);
      }}
      style={{
        backgroundColor: `#${hexColor}`,
        color: `${index < 10 ? "black" : "white"}`,
      }}
    >
      <p>{weight} %</p>
      <p>#{hexColor}</p>
      {skopirovane ? "Farba skopirovaná!" : null}
    </article>
  );
}

export default Farba;

// style={{backgroundColor: {hexColor}}}

/*   onClick={() => {
    navigator.clipboard.writeText(`#${hexColor}`);

    return setSkopirovane(true);
  }} */
