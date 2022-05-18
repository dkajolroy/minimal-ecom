import React, { useEffect } from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../../Redux/Actions/UserAction'

const schema = Yup.object({
    name: Yup.string().required("Name is empty").min(3, "Enter your valid name"),
    email: Yup.string().required("Email is empty").email("Enter your valid email"),
    password: Yup.string().required("Password is empty").min(4, "Minimum 4 character required"),
    password2: Yup.string().required("Password is empty").oneOf([Yup.ref("password")], "Password does't match")
})
const initValue = {
    name: '', email: '', password: '', password2: ""
}
function SignUp() {

    // Action Submit
    const dispatch = useDispatch()
    const { registerInfo } = useSelector(x => x.signUp)
    const navigate = useNavigate()
    useEffect(() => {
        if (registerInfo.message) {
            navigate("/sign-in")
        }
    }, [registerInfo])

    const submitForm = (e) => {
        const { password2, ...others } = e
        dispatch(registerAction(others))
    }

    return (
        <div data-aos="zoom-in" className="sign_up_form auth_sign_form">
            <div className="container">
                <div className="form col-lg-6 col-md-7 col-sm-10 shadow m-auto">
                    <h2 className='text-center'>SignUp</h2>

                    <Formik
                        validationSchema={schema}
                        initialValues={initValue}
                        onSubmit={(e) => submitForm(e)}
                    >
                        {({ errors, touched, values }) => (
                            <Form>
                                <div className="input_item">
                                    <label htmlFor="name">Name</label>
                                    <Field className={`form-control ${errors.name && touched.name ? "is-invalid" : values.name === "" ? "" : "is-valid"}`}
                                        name="name" type="text" id="name" placeholder="Enter your name" />
                                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                                </div>
                                <div className="input_item">
                                    <label htmlFor="email">Email</label>
                                    <Field className={`form-control ${errors.email && touched.email ? "is-invalid" : values.email === "" ? "" : "is-valid"}`}
                                        name="email" type="text" id="email" placeholder="Enter your email" />
                                    {errors.email && touched.email ? <span>{errors.email}</span> : null}
                                </div>
                                <div className="input_item">
                                    <label htmlFor="password">Password</label>
                                    <Field className={`form-control ${errors.password && touched.password ? "is-invalid" : values.password === "" ? "" : "is-valid"}`}
                                        name="password" type="password" id="password" placeholder="Enter your password" />
                                    {errors.password && touched.password ? <span>{errors.password}</span> : null}
                                </div>
                                <div className="input_item">
                                    <label htmlFor="password2">Re-Password</label>
                                    <Field className={`form-control ${errors.password2 && touched.password2 ? "is-invalid" : values.password2 === "" ? "" : "is-valid"}`}
                                        name="password2" type="password" id="password2" placeholder="Enter your password2" />
                                    {errors.password2 && touched.password2 ? <span>{errors.password2}</span> : null}
                                </div>
                                <div className="action__sign_in">
                                    <button type='submit' className="btn btn-success px-5">SignUp</button>
                                    <span>Already have an account to <Link to="/sign-in">Login </Link>?</span>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUp