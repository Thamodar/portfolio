import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const MainBar = () => {

  const [active, setActive] = useState("About");

  useEffect(() => {
    let currentUrl = window.location.href;
    console.log("currentUrl :", currentUrl);
    if (currentUrl.endsWith("/"))
      setActive('About');
    else if (currentUrl.endsWith("/resume"))
      setActive('Resume');
    else if (currentUrl.endsWith("/projects"))
      setActive('Projects');
  }, [active])

  return (
    <div className="mainbar__container">
      <div className="mainbar__active">
        {active}
      </div>
      <div className="mainbar__items">
        {active !== 'About' &&
          <Link to="/" className="mainbar__item">
            <div  onClick={() => setActive('About')}>About</div>
          </Link>
        }
        {active !== 'Resume' &&
          <Link to="/resume" className="mainbar__item">
            <div  onClick={() => setActive('Resume')}>Resume</div>
          </Link>
        }
        {active !== 'Projects' &&
          <Link to="/projects" className="mainbar__item">
            <div  onClick={() => setActive('Projects')}>Projects</div>
          </Link>}

      </div>
    </div>
  );
}

export default MainBar;