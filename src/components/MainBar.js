import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const MainBar = () => {

  const [active, setActive] = useState("About");

  useEffect(() => {
    let currentUrl = window.location.href;
    console.log("currentUrl :", currentUrl);
    if (currentUrl.endsWith("/"))
      setActive('ABOUT');
    else if (currentUrl.endsWith("/resume"))
      setActive('RESUME');
    else if (currentUrl.endsWith("/projects"))
      setActive('PROJECTS');
  }, [active])

  return (
    <div className="mainbar__container">
      <div className="mainbar__active">
        {active}
      </div>
      <div className="mainbar__items">
        {active !== 'ABOUT' &&
          <Link to="/" className="mainbar__item">
            <div onClick={() => setActive('About')}>ABOUT</div>
          </Link>
        }
        {active !== 'RESUME' &&
          <Link to="/resume" className="mainbar__item">
            <div onClick={() => setActive('Resume')}>RESUME</div>
          </Link>
        }
        {active !== 'PROJECTS' &&
          <Link to="/projects" className="mainbar__item">
            <div onClick={() => setActive('Projects')} style={{ marginRight: '5px' }}>PROJECTS</div>
          </Link>}

      </div>
    </div>
  );
}

export default MainBar;