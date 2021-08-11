import React,{Component} from 'react';
import Facebook from '../assets/icons/facebook.png';
import git from '../assets/icons/git.png';
import instagram from '../assets/icons/instagram.png';
import location from '../assets/icons/location.png';
import ProfileImage from '../assets/projectimages/profileimage.jpg';
import {AiFillFileText} from 'react-icons/ai';

class SideBar extends Component {

    render() {
      return (
          <>
            <div className="sidebar-items">
                <div>
                    <img src={ProfileImage} className="avatar profileimage"/>
                    <p>Thamodar  
                        <span>
                            T
                        </span>
                    </p>
                    <p className="tag-name">
                        Frontend Developer
                    </p>
                </div>

                <div>
                    <AiFillFileText className="icons"/>
                    <p>
                    Download Resume
                    </p>
                </div>

                <div>
                    <img src={Facebook} className="icons facebook"/>
                    <img src={instagram} className="icons instagram"/>
                </div>
                <div className="personal-detail">
                    <img src={location} className="icons location"/>
                       Tamilnadu , India
                    <div className="fromstart">
                        <img src={git} className="icons location"/>
                          Github
                    </div>
                    <p className="email">
                        thamodar96@gmail.com
                    </p>
                    <p className="phone">
                        8144812628
                    </p>
                </div>
                <button>
                    Email Me
                </button>

            </div>
          </>
      );
    }
}

export default SideBar;