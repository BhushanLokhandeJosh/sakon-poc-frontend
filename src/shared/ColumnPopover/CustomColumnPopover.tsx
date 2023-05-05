import { useState } from "react";
import { Button, Popover } from "@mui/material";
import "./style.css";

interface CustomColumnPopoverProps {
  arr: string[];
}

const CustomColumnPopover = ({ arr }: CustomColumnPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const content = arr
    ?.filter((item: string, index: number) => index !== 0)
    .map((item: string, index: number) => (
      <div key={index} className="content-container">
        {item}
      </div>
    ));

  return (
    <>
      {arr.length > 0 && (
        <>
          {arr[0]}
          {arr.length > 1 && (
            <>
              <Button onClick={handleClick}>{`+${arr.length - 1}`}</Button>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                sx={{
                  p: 2,
                  m: 1,
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
                {content}
              </Popover>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CustomColumnPopover;
