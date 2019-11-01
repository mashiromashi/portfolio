import React, { Component } from 'react';

class Works extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="center-align">
                    <h3 style={{ color: "#D8DEE9" }}>Personal Projects</h3>
                </div>
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
                </div>
                <div className="col 12 m6">
                    <div className="card">
                        <div className="card-content" style={{ padding: "20px" }}>
                            <h6 className="flow-text">Flood Map Backend</h6>
                            <p>
                                Backend for the Flood Map and Water Level System Protype written in NodeJs using MongoDB as a database.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/mashiromashi/FloodMapBackend">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Works;