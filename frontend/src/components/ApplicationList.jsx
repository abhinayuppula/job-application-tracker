


import { useEffect, useState } from 'react';
import api from '../services/api';

function ApplicationList() {

    const [applications, setApplications] = useState([]);
    const [searchCompany, setSearchCompany] = useState('');
    const [editingApplication, setEditingApplication] = useState(null);

    // Fetch all applications
    const fetchApplications = () => {
        api.get('/getAllApplications')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Unable to fetch applications');
            });
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    // Delete application
    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this application?'
        );

        if (confirmDelete) {
            api.delete(`/deleteApplicationById/${id}`)
                .then(() => {
                    alert('Application deleted successfully!');

                    setApplications(prev =>
                        prev.filter(app => app.sid !== id)
                    );
                })
                .catch(error => {
                    console.error(error);
                    alert('Unable to delete application');
                });
        }
    };

    // Edit application
    const handleEdit = (application) => {
        setEditingApplication({ ...application });
    };

    // Handle edit form changes
    const handleEditChange = (e) => {
        setEditingApplication({
            ...editingApplication,
            [e.target.name]: e.target.value
        });
    };

    // Update application
    const handleUpdate = (e) => {
        e.preventDefault();

        api.put(
            `/updateApplicationId/${editingApplication.sid}`,
            editingApplication
        )
            .then(response => {
                alert('Application updated successfully!');

                setApplications(prev =>
                    prev.map(app =>
                        app.sid === editingApplication.sid
                            ? response.data
                            : app
                    )
                );

                setEditingApplication(null);
            })
            .catch(error => {
                console.error(error);
                alert('Unable to update application');
            });
    };

    // Search application by company name
    const handleSearch = () => {

        if (searchCompany.trim() === '') {
            alert('Please enter a company name');
            return;
        }

        api.get(
            `/getApplicationBycompanyname/${encodeURIComponent(searchCompany.trim())}`
        )
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Unable to search applications');
            });
    };

    // Get status badge color
    const getStatusClass = (status) => {
        switch (status) {
            case 'Applied':
                return 'bg-primary';

            case 'Interview Scheduled':
                return 'bg-warning text-dark';

            case 'Selected':
                return 'bg-success';

            case 'Rejected':
                return 'bg-danger';

            default:
                return 'bg-secondary';
        }
    };

    return (
        <div className="container-fluid page-container">

            {/* Page heading */}
            <h2 className="page-title">My Applications</h2>

            <p className="page-subtitle">
                View, search, update and manage your job applications.
            </p>

            {/* Search section */}
            <div className="custom-card mb-4">

                <div className="row align-items-center g-3">

                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by company name..."
                            value={searchCompany}
                            onChange={(e) => setSearchCompany(e.target.value)}
                        />
                    </div>

                    <div className="col-md-3 d-flex gap-2">

                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>

                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setSearchCompany('');
                                fetchApplications();
                            }}
                        >
                            Clear
                        </button>

                    </div>

                </div>
            </div>

            {/* Edit application form */}
            {editingApplication && (

                <div className="custom-card mb-4">

                    <h3 className="mb-4">Edit Job Application</h3>

                    <form onSubmit={handleUpdate}>

                        <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input
                                type="text"
                                name="companyname"
                                className="form-control"
                                value={editingApplication.companyname || ''}
                                onChange={handleEditChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Job Role</label>
                            <input
                                type="text"
                                name="jobrole"
                                className="form-control"
                                value={editingApplication.jobrole || ''}
                                onChange={handleEditChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Job Type</label>
                            <input
                                type="text"
                                name="jobtype"
                                className="form-control"
                                value={editingApplication.jobtype || ''}
                                onChange={handleEditChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Location</label>
                            <input
                                type="text"
                                name="location"
                                className="form-control"
                                value={editingApplication.location || ''}
                                onChange={handleEditChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Application Status</label>
                            <select
                                name="applicationstatus"
                                className="form-select"
                                value={editingApplication.applicationstatus || ''}
                                onChange={handleEditChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Applied">Applied</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Selected">Selected</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Applied Date</label>
                            <input
                                type="date"
                                name="applieddate"
                                className="form-control"
                                value={editingApplication.applieddate || ''}
                                onChange={handleEditChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Job Description</label>
                            <textarea
                                name="jobdescription"
                                className="form-control"
                                value={editingApplication.jobdescription || ''}
                                onChange={handleEditChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Job URL</label>
                            <input
                                type="url"
                                name="joburl"
                                className="form-control"
                                value={editingApplication.joburl || ''}
                                onChange={handleEditChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-success me-2">
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setEditingApplication(null)}
                        >
                            Cancel
                        </button>

                    </form>
                </div>
            )}

            {/* Applications table */}
            <div className="custom-card mt-4">

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Company</th>
                                <th>Job Role</th>
                                <th>Job Type</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Applied Date</th>
                                <th>Description</th>
                                <th>Job URL</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {applications.length > 0 ? (

                                applications.map((application) => (

                                    <tr key={application.sid}>

                                        <td>{application.sid}</td>

                                        <td className="fw-semibold">
                                            {application.companyname}
                                        </td>

                                        <td>{application.jobrole}</td>

                                        <td>{application.jobtype}</td>

                                        <td>{application.location}</td>

                                        <td>
                                            <span className={`badge ${getStatusClass(application.applicationstatus)} px-3 py-2`}>
                                                {application.applicationstatus}
                                            </span>
                                        </td>

                                        <td>{application.applieddate}</td>

                                        <td>{application.jobdescription}</td>

                                        <td>
                                            {application.joburl ? (
                                                <a
                                                    href={application.joburl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Job
                                                </a>
                                            ) : (
                                                <span className="text-muted">
                                                    N/A
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <div className="d-flex gap-2">

                                                <button
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => handleEdit(application)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(application.sid)}
                                                >
                                                    Delete
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="10"
                                        className="text-center py-4 text-muted"
                                    >
                                        No applications found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}

export default ApplicationList;
