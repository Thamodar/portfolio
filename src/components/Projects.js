import React, { Component } from 'react';
import projectdata from './data/projects_data';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectdata: projectdata
        }
    }

    onClick = () => {
        console.log("helo");
    }

    render() {

        return (
            <>
                <div className="projectCard_Navigator">
                    <div onClick={this.onClick}>ALL</div>
                    <div onclick={this.onClick}>React Js</div>
                </div>
                <div className="projectCard_container">

                    {
                        this.state.projectdata.map((project) =>
                            <ProjectCard
                                key={project.name}
                                project={project}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}

export default Projects;
