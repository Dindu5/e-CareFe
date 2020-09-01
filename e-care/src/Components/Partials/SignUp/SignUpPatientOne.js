import React, { Component } from 'react'


import Img6 from '../../../Images/f.png'
import Img7 from '../../../Images/g.png'
export class SignUpPatientOne extends Component {

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
                                <button className="btn w-100 text-white top-btn">
                                    SignUp With Facebook
                                    <img src={Img6} className="pull-right background" alt="deco-background" />
                                </button>
                                <button className="btn w-100 text-white top-btn mt-2">
                                    SignUp With Google
                                    <img src={Img7} className="pull-right background" alt="deco-background" />
                                </button>
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
                            <form className="register">
                                <div classNamed="d-flex">
                                    <label className="cont">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark check1"></span>
                                    </label>
                                    <p className="inbetween d-inline mr-2">or</p>
                                    <label className="cont">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark check2"></span>
                                    </label>
                                </div>

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
export default SignUpPatientOne
