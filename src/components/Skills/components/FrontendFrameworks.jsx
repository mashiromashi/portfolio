import React, { Component } from "react";
class FrontendFrameworks extends Component {
    state = {};
    render() {
        return (
            <div className="col s12 center-align">
                <div style={{ display: "inline-block" }}>
                    <h5 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>
                        I like to use these frameworks
          </h5>
                </div>
                <div>
                    <div style={{ display: "inline-flex" }} className="row">
                        <div
                            className="col s6"
                            id="react"
                            style={{
                                display: "inline-block",
                                marginRight: "50px",
                                padding: "20px"
                            }}
                        >
                            <img
                                src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                                alt=""
                                style={{ height: "100px" }}
                            />
                            <p style={{ color: "#E5E9F0" }}>React</p>
                        </div>
                        <div
                            className="col s6"
                            id="Vue"
                            style={{
                                display: "inline-block",
                                marginRight: "50px",
                                padding: "20px"
                            }}
                        >
                            <img
                                src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
                                alt=""
                                style={{ height: "100px" }}
                            />
                            <p style={{ color: "#E5E9F0" }}>Vue</p>
                        </div>
                        <div
                            className="col s6"
                            id="bootstrap"
                            style={{
                                display: "inline-block",
                                marginRight: "50px",
                                padding: "20px"
                            }}
                        >
                            <img
                                src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                                style={{
                                    height: "100px"
                                }}
                                alt=""
                            />
                            <p style={{ color: "#E5E9F0" }}>Bootstrap</p>
                        </div>
                        <div
                            className="col s6"
                            style={{
                                display: "inline-block",
                                marginRight: "50px",
                                padding: "20px"
                            }}
                        >
                            <img
                                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                                alt=""
                                style={{ height: "100px" }}
                            />
                            <p style={{ color: "#E5E9F0" }}>Tailwind</p>
                        </div>
                        <div
                            className="col s12  "
                            id="Materialize"
                            style={{
                                display: "inline-block",
                                padding: "20px"
                            }}
                        >
                            <img
                                src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"
                                alt=""
                                style={{ height: "100px" }}
                            />
                            <p style={{ color: "#E5E9F0" }}>Materialize</p>
                        </div>
                    </div>
                </div>

                <div class="col s12">
                    <div style={{ display: "inline-block" }}>
                        <h6 style={{ color: "#E5E9F0" }}>... and many more to come.</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontendFrameworks;
