import React, { Component } from 'react'

import Img1 from '../../../Images/facebook.png'
import Img3 from '../../../Images/google.png'
export class SignUpPatientTwo extends Component {
    render() {

        switch (this.props.count) {
            case 1:

                return (
                    <div>
                        <div className="form-box">
                            <div className="box-title">
                                Register
                            </div>
                            <form className="sign-in">
                                <div className="position-relative">
                                    <input type="text" placeholder="SignUp with Facebook" className="form-control" />
                                    <img src={Img1} className="background position-absolute" alt="deco-background" />
                                </div>
                                <div className="position-relative">
                                    <input type="text" placeholder="SignUp with Google" className="form-control mt-2" />
                                    <img src={Img3} className="background position-absolute" alt="deco-background" />
                                </div>
                            </form>
                            <h6 className="division">or</h6>
                            <form>
                                <input type="text" placeholder="Enter Name" className="form-control" />
                                <input type="email" placeholder="Enter Email" className="form-control mt-2" />
                                <input type="number" placeholder="Enter Mobile Number" className="form-control mt-2" />
                                <input type="number" placeholder="Enter OTP" className="form-control otp mt-2" />
                                <button
                                    className="next-btn mt-2"
                                    onClick={this.props.nextCount}
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>
                );
            case 2:

                return (
                    <div>
                        <div className="form-box">
                            <div className="box-title">
                                Register
                                </div>
                            <form className="sign-in">
                                <label className="cont">
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <p className="d-inline mr-1">or</p>
                                <label className="cont">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <input type="date" placeholder="Enter D. O. B" className="form-control mt-2" />
                                <hr
                                    style={{
                                        color: '#333',
                                        backgroundColor: '#333',
                                    }}
                                />

                                <input type="password" placeholder="Enter Password" className="form-control mt-2" />
                                <input type="password" placeholder="Confirm Password" className="form-control mt-2" />
                                <button className="next-btn mt-2">
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                );
        }
    }
}
export default SignUpPatientTwo
