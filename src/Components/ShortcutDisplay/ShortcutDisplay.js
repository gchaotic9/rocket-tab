import React, { useState } from "react";
import ShortcutBubble from "./ShortcutBubble";
import classes from "./ShortcutDisplay.module.css";
import { AiOutlinePlus } from "react-icons/ai";
const ShortcutDisplay = (props) => {
  const generate20DigitNumber = () => {
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();
    // Multiply the random number by 10^20 to get a 20-digit number
    randomNumber = randomNumber * Math.pow(10, 20);
    // Convert the number to a string and log it
    return randomNumber.toString();
  };
  const AddShortcutBubble = () => {
    return (
      <div
        className={classes.addShortcutBubble}
        onClick={() => {
          props.openShortcutPopup();
        }}
      >
        <div className={classes.plusContainer}>
          <AiOutlinePlus id={classes.plus} />
        </div>
      </div>
    );
  };
  return (
    <div className={classes.bubbleContainer}>
      {JSON.parse(localStorage.getItem("shortcuts")) != null ? (
        <>
          {JSON.parse(localStorage.getItem("shortcuts")).length > 0 ? (
            JSON.parse(localStorage.getItem("shortcuts"))
              .slice(0)
              .reverse()
              .map((shortcut) => (
                <ShortcutBubble
                  key={generate20DigitNumber()}
                  shortcut={shortcut}
                />
              ))
          ) : (
            <AddShortcutBubble />
          )}
        </>
      ) : (
        <AddShortcutBubble />
      )}
    </div>
  );
};

export default ShortcutDisplay;
