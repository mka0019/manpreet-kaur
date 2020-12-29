import React from 'react';




function TimelineWork({wr}){
        return(
            <li class="timeline-item" key={wr.id}>
                <div class="timeline-info">
                    <span>{wr.years}</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3 class="timeline-company">{wr.company}</h3>
                    <h4 class="timeline-title">{wr.title}</h4>
                    {/* <h5 class="timeline-location">New York</h5> */}
                    <ul>
                        {wr.text.map((arr) =>{
                            return(
                                <li>{arr}</li>
                            );
                        })

                        }
                    </ul>
                </div>
            </li>
        );
}

function TimelineEducation({er}){
    return(
        <li class="timeline-item" key={er.id}>
        <div class="timeline-info">
            <span>{er.duration}</span>
        </div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3 class="timeline-company">{er.academy}</h3>
            <h4 class="timeline-title">{er.major}</h4>
            <h5 class="timeline-location">{er.location}</h5>
        </div>
    </li>
    );
}


function Timeline(props){
    const workResume = props.workTimelineMain.map(wr =>{
        return(
            <TimelineWork wr={wr} />
        );
    });

    const educationResume = props.educationTimelineMain.map(er =>{
        return(
            <TimelineEducation er={er}/>
        );
    });


    return(
        <React.Fragment>
            <section id="resume">
                <div className="container">
                        <div className="work-section">
                            <h2>Work Experience</h2>
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto">
                                    <ul className="timeline timeline-split">
                                        {workResume}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="education-section">
                        <h2>Education</h2>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto">
                                <ul className="timeline timeline-centered">
                                    {educationResume}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}



export default Timeline;