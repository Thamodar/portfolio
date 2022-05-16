import React, { Component } from 'react';
import Bar from './Bar';
import resumeData from './data/resume_data';

const Resume = () => {

    return (
        <div classname="container__inner__resume">
            <div classname="container__resume" style={{  padding: '10px',weight:'100%'}}>
                {
                    resumeData.map(data => {
                        if (data.renderType === 'detail') {
                            return <div className="resume__data">
                                <h1>{data.heading}</h1>
                                <h3>{data.Subheadings.name}</h3>
                                {
                                    data.Subheadings.list.map(lt => {
                                        return <>
                                            <h3>{lt.subname}</h3>
                                            <p>{lt.description}</p>
                                        </>
                                    }
                                    )
                                }
                            </div>
                        }
                        if (data.renderType === 'bar') {
                            return <div className="resume__data">
                                <h1>{data.heading}</h1>
                                {
                                    data.list.map(lt => {
                                        return <>
                                            <Bar
                                                list={lt}
                                            >
                                            </Bar>
                                        </>
                                    }
                                    )
                                }
                            </div>

                        }
                    })
                }
            </div>
        </div>
    )

}


export default Resume
