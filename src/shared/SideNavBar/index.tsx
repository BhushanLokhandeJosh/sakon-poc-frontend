import React, { useState } from "react";

import "./SideNavBar.css";

const SideNavBar = ({ sideBarMenus }: any) => {
  const [isExpanded, setExpendState] = useState(false);
  console.log(sideBarMenus,"side");

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <h1>Sidebar</h1>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/Logo.svg" alt="" />
              <h2>Showkart</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {sideBarMenus.map(({ text, icon }: any) => {
            console.log(text, icon);
            return (
              <a
                key={icon}
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              >
                <img className="menu-item-icon" src={icon} alt="" />
                {isExpanded && <p>{text}</p>}
              </a>
            );
          })}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">M Showkat</p>
              <p className="nav-footer-user-position">store admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;
