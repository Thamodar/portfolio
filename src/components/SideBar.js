import React, { Component } from 'react';
import ProfileImage from '../assets/projectimages/profileimageone.jpg';
import resumeDocument from '../assets/docs/resumeDoc.docx'
import { AiFillFileText, AiOutlineGithub } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

class SideBar extends Component {

    render() {
        return (
            <div className="sidebar-items">
                <img src={ProfileImage} alt="profileimage" className="avatar profileimage" />
                <p className="profile-name">Thamodar T </p>
                <p className="tag-name">
                    Frontend Developer
                </p>

                <a href={resumeDocument} className="flexbox download-resume">
                    <AiFillFileText className="icons" />
                    <p className="sb-font-weight download-resume-content">
                        Download Resume
                    </p>
                </a>

                {/* <div className="social-media">
                    <img src={Facebook} className="icons facebook" />
                    <img src={instagram} className="icons instagram" />
                </div> */}
                <div className="flexbox personal-detail">
                    <div className="flexbox">
                        <GrLocation className="icons location" />
                        Tamilnadu , India
                    </div>
                    <div className="fromstart">
                        <a href="https://github.com/Thamodar" alt="Github" target="_blank" rel="noreferrer" className="flexbox padding-border">
                            <AiOutlineGithub className="icons location" />
                            Github
                        </a>
                    </div>
                    <a href="mailto:thamodar96@gmail.com" className="sb-email padding-border para">
                        thamodar96@gmail.com
                    </a>
                    <p className="phone para">
                        8144812628
                    </p>
                </div>
                {/* <button className="sb-email-btn">
                    Email Me
                </button> */}

            </div>
        );
    }
}

export default SideBar;