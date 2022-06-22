import React from 'react'

export default function ProjectCard({ project: { name, imagee, github_link, deployment_link, category, Icon } }) {
    return (
        <div className="projectCard">
            <a href={deployment_link} target="_blank" rel="noreferrer">
                <img src={imagee} alt="project Imagee" rel="noreferrer" className="projectCard_image" />
            </a>
            <div className="projectCard_Title">
                <a href={github_link} target="_blank" rel="noreferrer">
                    <Icon
                        className="projectCard_Icon"
                    />
                </a>
                {name}
            </div>
        </div>
    )
}
