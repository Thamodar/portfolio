import React from 'react';
import { MdDeveloperMode } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";


const About = () => {

    const objective = "To work in the Organization where my knowledge and skills to improve the growth of the Organization collaboratively working with the team and through improve my skills also";

    const offered = [
        {
            key: 1,
            icon: MdDeveloperMode,
            fieldName: 'Frontend Development',
            fieldDesc: 'I can build a Single Page Applications using Technologies such as React Js, Material UI and Redux'
        },
        {
            key: 2,
            icon: CgPerformance,
            fieldName: 'Quality Assurance',
            fieldDesc: 'Able to write TestCases, can able to perform API Testing , Web Testing through Manual and Automation'
        }

    ]

    return (
        <div className="container__inner">
            <div className="about__objective">
                {objective}
            </div>
            <div className="about__offered">
                <h2 className="about_title">
                    What I Offered
                </h2>
                <div className="about__offer">
                    {
                        offered.map(offer => {
                            const Icon = offer.icon;
                            return (
                                <div className="about__offer__each">
                                    <Icon className="about__icons" />
                                    <h5 className="about__fieldname">
                                        {offer.fieldName}
                                    </h5>
                                    <p className="about__fielddesc">
                                        {offer.fieldDesc}
                                    </p>
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        </div>
    )
}


export default About
