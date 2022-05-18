import React, { useEffect, useState } from 'react'
import './sign_in.css'
import * as Yup from 'yup'
import { Field, Formik, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../Redux/Actions/UserAction'


const schema = Yup.object({
    email: Yup.string().required("Email is empty").email("Invalid Email"),
    password: Yup.string().required("Password is empty").min(4, "Minimum 4 character")
})
const initValue = {
    email: "",
    password: ''
}


function SignIn() {

    // Action Login
    const dispatch = useDispatch()
    const { loginInfo } = useSelector(x => x.signIn)
    const navigate = useNavigate()
    useEffect(() => {
        if (loginInfo.name) {
            navigate("/")
        }
    }, [loginInfo])

    const submitForm = (e) => {
        dispatch(loginAction(e))
    }


    return (
        <div data-aos="zoom-in" className='sign_in_section auth_sign_form'>
            <div className="container">
                <div className="form col-lg-5 col-md-7 col-sm-10 m-auto shadow">
                    <h2 className='m-0 text-center'>Sign In</h2>
                    <Formik
                        validationSchema={schema}
                        initialValues={initValue}
                        onSubmit={(e) => submitForm(e)}
                    >
                        {({ errors, touched, values }) => (
                            <>

                                <Form >
                                    <div className="input_item ">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            className={`form-control ${errors.email && touched.email ? "is-invalid" : values.email === '' ? "" : "is-valid"}`}
                                            placeholder="Enter your email" name='email' id='email' type="text" />
                                        {errors.email && touched.email ? <span>{errors.email}</span> : null}
                                    </div>
                                    <div className="input_item">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            className={`form-control ${errors.password && touched.password ? "is-invalid" : values.password === "" ? "" : "is-valid"}`}
                                            placeholder="Enter your password" id="password" name='password' type="password" />
                                        {errors.password && touched.password ? <span>{errors.password}</span> : null}
                                    </div>
                                    <div className="action__sign_in">
                                        <button className='btn btn-success px-5' type="submit">Login</button>
                                        <span>Don't have an account to <Link to="/sign-up">Register</Link> ?</span>
                                    </div>
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>

        </div >
    )
}

export default SignIn