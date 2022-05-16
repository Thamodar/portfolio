import React, { Component } from 'react';
import projectdata from './data/projects_data';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectdata,
            pData:projectdata
        }
    }

    onClick = (e) => {

         console.log(e.target.innerText);
        this.setState({
            pData:this.state.projectdata.filter((project) => project.category.includes(e.target.innerText))
            },() => console.log(this.state.pData));
    
    }

    render() {

        return (
            <>
                <div className="projectCard_Navigator">
                    <div className="projectCard_Navigator__item" onClick={this.onClick} name="ALL">ALL</div>
                    <div className="projectCard_Navigator__item" onClick={this.onClick} name="React">React</div>
                </div>
                <div className="projectCard_container">
                    {
                        this.state.pData.map((project) =>
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
