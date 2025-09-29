// FormikValidation.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

// Yup Validation Schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

// Main Component
const ValidationExample = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow" style={{ minWidth: '350px' }}>
      <h2 className="text-center mb-4">Signup Form</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log('Form Submitted:', values);
          alert('Form Submitted! Check console.');
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <Field
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="Enter first name"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-danger">{errors.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <Field
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Enter last name"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-danger">{errors.lastName}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              {errors.email && touched.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default ValidationExample;
