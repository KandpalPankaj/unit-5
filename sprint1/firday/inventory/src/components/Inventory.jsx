import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 0
  });
  // Create add and remove functions here that changes the
  // state.
  const handleStateb = (value) => {
    if (inv.books + value < 0) return;

    setInv((previousState) => {
      return { ...previousState, books: inv.books + value };
    });
  };
  const handleStateN = (value) => {
    if (inv.notebooks + value < 0) return;
    setInv((previousState) => {
      return { ...previousState, notebooks: inv.notebooks + value };
    });
  };
  const handleStateP = (value) => {
    if (inv.pens + value < 0) return;
    setInv((previousState) => {
      return { ...previousState, pens: inv.pens + value };
    });
  };
  const handleStateI = (value) => {
    if (inv.inkpens + value < 0) return;
    setInv((previousState) => {
      return { ...previousState, inkpens: inv.inkpens + value };
    });
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateb(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateb(-1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateN(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateN(-1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateP(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateP(-1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateI(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleStateI(-1);
          }}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
