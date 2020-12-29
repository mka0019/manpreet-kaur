import React from 'react';


function Timeline(){
    return(
        <React.Fragment>
            <div id="resume" className="container">
                <div className="row example-centered">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto">
                        <ul className="time timeline-centered">
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>June 2016 to March 2020</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-company">Flightpath</h3>
                                    <h4 class="timeline-title">Digital Production Associate</h4>
                                    {/* <h5 class="timeline-location">New York</h5> */}
                                    <ul>
                                        <li>Plan, develop, and administer website functionality tests to detect and diagnose errors and bugs using client specs, design specs and wireframes</li>
                                        <li>Apply a user perspective to ensure the website is UX friendly</li>
                                        <li>Cross-browser and cross-device testing</li>
                                        <li>Data Entry</li>
                                        <li>Webiste Maintance on Wordpress and Umbraco platforms</li>
                                        <li>Launching websites</li>
                                    </ul>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 23, 2018</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Timeline;