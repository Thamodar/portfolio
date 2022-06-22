import React, { Component } from 'react';
import Bar from './Bar';
import resumeData from './data/resume_data';

const Resume = () => {

    const styles = {
        padding: '10px', 
        overflowY: 'scroll', 
        height: '700px', 
        backgroundColor: 'lightslategrey', 
        borderRadius: '8px',
        scrollbarColor:'inherit'
    }

    return (
        <div classname="container__resume" style={styles}>
            {
                resumeData.map(data => {
                    if (data.renderType === 'detail') {
                        return <div className="resume__data">
                            <h1>{data.heading}</h1>
                            {
                                data.Subheadings.map((subheading) => {
                                        return(
                                        <>
                                        <h2>{subheading.name}</h2>
                                        {
                                            subheading.list.map(lt => {
                                                return <>
                                                    <h3>{lt.subname}</h3>
                                                    <p style={{paddingLeft:'20px'}}>{lt.description}</p>
                                                </>
                                                }
                                            )
                                        }
                                        </>
                                    )
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
                }
                )
            }
        </div>
    )

}


export default Resume
