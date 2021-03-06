import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { save } from '../actions/form';
import * as Yup from 'yup';

// Validation with Yup
const formSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First Name is required")
        .max(255,"Maximum 255 characters"),
    lastName: Yup.string()
        .required("Last Name is required")
        .max(255,"Maximum 255 characters"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid Email")
        .max(255,"Maximum 255 characters"),
    country: Yup.string()
        .required("Country is required")
        .max(255,"Maximum 255 characters"),
    streetAddress: Yup.string()
        .required("Street Address is required")
        .max(255,"Maximum 255 characters"),
    city: Yup.string()
        .required("City is required")
        .max(255,"Maximum 255 characters"),
    state: Yup.string()
        .required("State is required")
        .max(255,"Maximum 255 characters"),
    postalCode: Yup.string()
        .required("Postal Code is required")
        .max(5,"Maximum 5 characters")
        .min(4,"Minimum 4 characters")
});

export const FormikComponent = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: ''
    });

    const {firstName, lastName, email, country, streetAddress, city, state, postalCode} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(save(firstName, lastName, email, country, streetAddress, city, state, postalCode));
    }

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    country: '',
                    streetAddress: '',
                    city: '',
                    state: '',
                    postalCode: ''
                }}
                validationSchema={formSchema}
                >
                <Form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <Field
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                value={firstName}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="firstName" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <Field
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="lastName" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <Field
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="email" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country / Region
                            </label>
                            <Field as="select"
                                id="country"
                                name="country"
                                autoComplete="country"
                                value={country}
                                onChange={handleInputChange}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                                <option>Guatemala</option>
                                <option>El Salvador</option>
                                <option>Honduras</option>
                                <option>Nicaragua</option>
                                <option>Costa Rica</option>
                                <option>Panama</option>
                            </Field>
                            <ErrorMessage name="country" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6">
                            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                                Street address
                            </label>
                            <Field
                                type="text"
                                name="streetAddress"
                                id="streetAddress"
                                autoComplete="streetAddress"
                                value={streetAddress}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="streetAddress" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <Field
                                type="text"
                                name="city"
                                id="city"
                                value={city}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="city" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State / Province
                            </label>
                            <Field
                                type="text"
                                name="state"
                                id="state"
                                value={state}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="state" component="span" className="font-large text-red-500" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                                ZIP / Postal
                            </label>
                            <Field
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                autoComplete="postalCode"
                                value={postalCode}
                                onChange={handleInputChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="postalCode" component="span" className="font-large text-red-500" />
                            </div>
                        </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
