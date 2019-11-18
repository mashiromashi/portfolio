import React, { Component } from 'react';

class FloodmapFront extends Component {
    state = {}
    render() {
        return (
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src="/img/FloodMap.jpg" alt="" style={{ padding: "10px" }} />
                    </div>
                    <div className="card-component" style={{ padding: "20px" }}>
                        <h6 className="flow-text">Flood Map and Water Level System Protype</h6>
                        <p>
                            A civil project for San Mateo, Rizal in Philipines. Specifically, Sapang Labo River and Batasan River.
                            An Arduino board with ultrasonic sensor will be placed at each river and measure the water level
                            then sends data to the website.
                            The website will fetch the data periodically then updates the colour of the pins which indicates the warning level of the water in real-time.
                    </p>
                    </div>
                    <div className="card-action">
                        <a href="https://github.com/mashiromashi/FloodMapFront">Code</a>
                    </div>
                </div>
            </div>);
    }
}

export default FloodmapFront;