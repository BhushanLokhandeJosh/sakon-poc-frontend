import React from "react";

//This Hook is design to handle popover throught application.
const usePopover = () => {
  /*anchorEl State represents the element that the popover is anchored to.
  Initially, it is set to `null`.*/
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  /* "handleClick" function is defined to handle the click event on the button
   that triggers the popover. It takes an event parameter and sets the 
   "anchorEl" state to the current target element of the event.*/
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /* "handleClose" function is defined to handle the popover close event. 
  It simply sets the "anchorEl" state back to "null".*/
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* The "open" constant is declared and set to "true" if "anchorEl" is
   not "null", indicating that the popover should be open. */
  const open = Boolean(anchorEl);

  /* The "id" constant is declared and set to "simple-popover" if "open" 
  is "true", otherwise it is set to "undefined". This is used as the 
  "aria-describedby" attribute value for accessibility purposes. */
  const id = open ? "simple-popover" : undefined;

  return { anchorEl, open, id, handleClick, handleClose };
};

export default usePopover;
