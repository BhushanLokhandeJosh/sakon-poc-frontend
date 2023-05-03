import { Button, Popover } from "@mui/material";
import React, { useState } from "react";

export default function CustomColumnPopover({ arr }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {arr[0]}
      {arr.length > 1 ? (
        <Button onClick={handleClick}>{`+${arr.length - 1}`}</Button>
      ) : (
        <></>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          p: 2,
          m: 1,
          "& > *": {
            margin: "0.5rem 0",
          },
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <React.Fragment>
          {arr?.map((a: any) => (
            <b>
              {a}
              <br />
            </b>
          ))}
        </React.Fragment>
      </Popover>
    </>
  );
}
