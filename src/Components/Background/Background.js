import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CenterScreen from "../CenterScreen/CenterScreen";
import classes from "./Background.module.css";
import defaultClasses from "./DefaultBackground.module.css";
import Clock from "../CenterScreen/Clock";
import Navigation from "../Navigation/Navigation";
import BackgroundPopup from "../BackgroundPopup/BackgroundPopup";
import AddShortcuts from "../AddShortcuts/AddShortcuts";

const Background = () => {
  const [bgLocalState, setBgLocalState] = useState("");
  const [classState, setClassState] = useState(defaultClasses);
  const [backgroundPopupState, setBackgroundPopupState] = useState(false);
  const [addShortcutsPopup, setAddShortcutsPopup] = useState(false);
  const [openShortcutsPop, setOpenShortcutsPop] = useState(false);
  const [
    // When this state is true, the add shortcuts popup will automatically ask the user for a new shortcut to add when it is opened
    // This is used when the add shortcut button is clicked from the center screen
    // It will open the popup and ask for the new shortcut without waiting for the user to click the plus sign in the popup
    openAddShortcutsPopupWithAddModeOnState,
    setOpenAddShortcutsPopupWithAddModeOnState,
  ] = useState(false);
  const backgroundRef = useRef(null);
  const width = 1920;
  const height = 1080;
  const changeBg = (newBg) => {
    if (newBg == null) {
      // Setting the bg to null means the default background
      // We can't just set the local storage to null because it will save as 'null' the string, instead of null (not found)
      localStorage.removeItem("bg");
      setBgLocalState(newBg);
    } else {
      localStorage.setItem("bg", newBg);
      setBgLocalState(newBg);
    }
  };
  useEffect(() => {
    setBgLocalState(localStorage.getItem("bg"));
    if (bgLocalState == "Tropical beach") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1548041347-390744c58da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=100&w=1920&h=1080)";
    } else if (bgLocalState == "Iceland waterfall") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1548049983-5be60c9bc004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Forest") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Sunset beach") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1547532182-bf296f6be875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Sunset forest") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Sunset path") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Yellow mountain") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1581888517319-570283943d82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Snow mountain") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=100&w=1920&h=1080')";
    } else if (bgLocalState == "Mountain rocks") {
      backgroundRef.current.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=100&w=1920&h=1080')";
    }
    if (bgLocalState == null) {
      setClassState(defaultClasses);
      backgroundRef.current.style.background = // Default gradient
        "linear-gradient(45deg, #b16cff, #4460ff, #b16cff, #4460ff)";
    } else {
      setClassState(classes);
    }
  }, [bgLocalState]);
  return (
    <div className={classState.background} ref={backgroundRef}>
      <div className={classes.backgroundPopupContainer}>
        {!backgroundPopupState && !addShortcutsPopup ? (
          <CenterScreen
            openShortcutPopup={() => {
              setAddShortcutsPopup(true);
              setOpenAddShortcutsPopupWithAddModeOnState(true);
            }}
          />
        ) : (
          <>
            {backgroundPopupState ? (
              <BackgroundPopup
                hidePopup={() => {
                  setBackgroundPopupState(false);
                }}
                changeBg={changeBg}
              />
            ) : null}
            {addShortcutsPopup ? (
              <AddShortcuts
                hidePopup={() => {
                  setAddShortcutsPopup(false);
                  setOpenAddShortcutsPopupWithAddModeOnState(false);
                }}
                openAddShortcutsPopupWithAddModeOnState={
                  openAddShortcutsPopupWithAddModeOnState
                }
                setOpenAddShortcutsPopupWithAddModeOnState={
                  setOpenAddShortcutsPopupWithAddModeOnState
                }
              />
            ) : null}
          </>
        )}
      </div>

      <Navigation
        openPopup={() => {
          setBackgroundPopupState(true);
          setAddShortcutsPopup(false);
        }}
        openShortcutsPopup={() => {
          setAddShortcutsPopup(true);
          setBackgroundPopupState(false);
        }}
      />
    </div>
  );
};

export default Background;
