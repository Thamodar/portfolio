import React from 'react'

export default function ProjectCard({ project: { name, image, github_link, deployment_link, category, Icon } }) {
    return (
        <div className="projectCard">
            <a href={deployment_link} target="_blank">
                <img src={image} alt="project Image" className="projectCard_image" />
            </a>
            <div className="projectCard_Title">
                <a href={github_link} target="_blank">
                    <Icon
                        className="projectCard_Icon"
                    />
                </a>
                {name}
            </div>
        </div>
    )
}
