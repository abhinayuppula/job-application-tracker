

import { useState } from 'react';
import api from '../services/api';

function AddApplication() {

    const initialForm = {
        companyname: '',
        jobrole: '',
        jobtype: '',
        location: '',
        applicationstatus: 'Applied',
        applieddate: '',
        jobdescription: '',
        joburl: ''
    };

    const [application, setApplication] = useState(initialForm);

    const handleChange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/insert', application)
            .then(() => {
                alert('Application added successfully!');
                setApplication(initialForm);
            })
            .catch(error => {
                console.error(error);
                alert('Unable to add application');
            });
    };

    const handleReset = () => {
        setApplication(initialForm);
    };

    return (
        <div className="container-fluid page-container">

            <h2 className="page-title">Add New Application</h2>

            <p className="page-subtitle">
                Keep track of a new job opportunity by adding its details below.
            </p>

            <div className="custom-card">

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                name="companyname"
                                className="form-control"
                                placeholder="Enter company name"
                                value={application.companyname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Job Role *
                            </label>
                            <input
                                type="text"
                                name="jobrole"
                                className="form-control"
                                placeholder="e.g. Java Developer"
                                value={application.jobrole}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Job Type *
                            </label>
                            <select
                                name="jobtype"
                                className="form-select"
                                value={application.jobtype}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Location *
                            </label>
                            <input
                                type="text"
                                name="location"
                                className="form-control"
                                placeholder="e.g. Hyderabad"
                                value={application.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Application Status *
                            </label>
                            <select
                                name="applicationstatus"
                                className="form-select"
                                value={application.applicationstatus}
                                onChange={handleChange}
                                required
                            >
                                <option value="Applied">Applied</option>
                                <option value="Interview Scheduled">
                                    Interview Scheduled
                                </option>
                                <option value="Selected">Selected</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-semibold">
                                Applied Date *
                            </label>
                            <input
                                type="date"
                                name="applieddate"
                                className="form-control"
                                value={application.applieddate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12 mb-3">
                            <label className="form-label fw-semibold">
                                Job Description
                            </label>
                            <textarea
                                name="jobdescription"
                                className="form-control"
                                rows="4"
                                placeholder="Enter job description..."
                                value={application.jobdescription}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-12 mb-4">
                            <label className="form-label fw-semibold">
                                Job URL
                            </label>
                            <input
                                type="url"
                                name="joburl"
                                className="form-control"
                                placeholder="https://example.com/job"
                                value={application.joburl}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="d-flex gap-3 flex-wrap">

                        <button
                            type="submit"
                            className="btn btn-primary px-4"
                        >
                            Add Application
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-secondary px-4"
                            onClick={handleReset}
                        >
                            Reset
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddApplication;

