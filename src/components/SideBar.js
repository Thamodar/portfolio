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
            <div className="sidebar-items">
                <div className="profile-detail">
                    <img src={ProfileImage} className="avatar profileimage"/>
                    <p className="para">Thamodar  
                        <span>
                            T
                        </span>
                    </p>
                    <p className="tag-name para">
                        Frontend Developer
                    </p>
                </div>

                <div className="download-resume">
                    <AiFillFileText className="icons"/>
                    <p className="para">
                    Download Resume
                    </p>
                </div>

                <div className="social-media">
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
                    <p className="email para">
                        thamodar96@gmail.com
                    </p>
                    <p className="phone para">
                        8144812628
                    </p>
                </div>
                <button>
                    Email Me
                </button>

            </div>
      );
    }
}

export default SideBar;