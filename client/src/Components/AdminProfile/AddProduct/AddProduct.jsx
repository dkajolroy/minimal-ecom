import React, { useEffect } from 'react'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import './add_product.css'
import { useDispatch, useSelector } from 'react-redux'
import { createProductAction, getAllProduct } from '../../../Redux/Actions/ProductAction'
import { Scrollbars } from 'rc-scrollbars';

const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    image: Yup.string().required("Image is required"),
    desc: Yup.string(),
    brand: Yup.string(),
    price: Yup.number().required("Price is required"),
    stock: Yup.number().required("Stock is required")
})
const valuesD = { name: "", image: '', desc: "", brand: "", price: "", stock: "" }

function AddProduct() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    const state = useSelector(x => x.allProduct)

    //submit
    const submitProduct = async (e) => {
        await dispatch(createProductAction(e))
        dispatch(getAllProduct())
    }
    return (
        <div data-aos="zoom-in" className='add_product__ui'>
            <h2 className='my-2'>Add Product</h2><hr />
            <Scrollbars style={{ height: "79vh" }} >
                <div className="col-md-10 m-auto">
                    <Formik
                        validationSchema={schema}
                        initialValues={valuesD}
                        onSubmit={(e) => submitProduct(e)}
                    >
                        {({ errors, touched, values }) => (
                            <Form>
                                <div className="row">
                                    <div className="col dd_product_field">
                                        <label htmlFor="name">Product Name <span>*</span></label>
                                        <Field className={`form-control ${errors.name && touched.name ? "is-invalid" : values.name === "" ? "" : "is-valid"}`}
                                            name="name" id="name" />
                                    </div>
                                    <div className="col dd_product_field">
                                        <label htmlFor="brand">Brand</label>
                                        <Field as="select" className={`form-select ${errors.brand && touched.brand ? "is-invalid" : values.brand === "" ? "" : "is-valid"}`}
                                            name="brand" id="brand" >
                                            <option value="No Brand">No Brand</option>
                                            <option value="No Brand">No brand</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col add_product_field">
                                        <label htmlFor="price">Price <span>*</span></label>
                                        <Field className={`form-control ${errors.price && touched.price ? "is-invalid" : values.price === "" ? "" : "is-valid"}`}
                                            name="price" id="price" type="number" />
                                    </div>
                                    <div className="col add_product_field">
                                        <label htmlFor="stock">Stock <span>*</span></label>
                                        <Field className={`form-control ${errors.stock && touched.stock ? "is-invalid" : values.stock === "" ? "" : "is-valid"}`}
                                            name="stock" id="stock" type="number" />
                                    </div>
                                </div>
                                <div className="add_product_field">
                                    <label htmlFor="image">Image Url <span>*</span></label>
                                    <Field className={`form-control ${errors.image && touched.image ? "is-invalid" : values.image === "" ? "" : "is-valid"}`}
                                        name="image" id="image" type="url" />
                                </div>
                                <div className="add_product_field">
                                    <label htmlFor="desc">Description</label>
                                    <Field as="textarea" className={`form-control ${errors.desc && touched.desc ? "is-invalid" : values.desc === "" ? "" : "is-valid"}`}
                                        name="desc" id="desc" />
                                </div>
                                <button className='btn btn-success px-5 mt-2' type="submit">Add Product</button>
                            </Form>
                        )}
                    </Formik>
                    <hr />
                    <div className="all_product_view">
                        <div className="d-flex justify-content-between">
                            <h3>Total: {state.products.length}</h3>
                        </div>
                        {
                            state.products.map((x, index) => (
                                <div key={index} className="add_items border my-2">
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            <img className='w-100 rounded' src={x.image} alt="product" />
                                        </div>
                                        <div className="col-6">
                                            <h5>{x.name.substring(0, 30)}....</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5>${x.price.toFixed(2)}</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5>Stock: {x.stock}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Scrollbars>
        </div>
    )
}

export default AddProduct