import './App.css';
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="sidebar">
            <SideBar />
          </div>

          <div className="mainbar">
              <MainBar />
              <Switch>
                <Route exact path="/">
                  <About/>
                </Route>
                <Route path="/resume">
                  <Resume/>
                </Route>
                <Route path="/projects">
                  <Projects/>
                </Route>
                <Route>
                  <Redirect to ="/"/>
                </Route>
              </Switch>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
