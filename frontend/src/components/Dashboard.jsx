

import { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        api.get('/getAllApplications')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('Unable to load dashboard data', error);
            });

    }, []);

    const total = applications.length;

    const applied = applications.filter(
        app => app.applicationstatus === 'Applied'
    ).length;

    const interview = applications.filter(
        app => app.applicationstatus === 'Interview Scheduled'
    ).length;

    const selected = applications.filter(
        app => app.applicationstatus === 'Selected'
    ).length;

    const rejected = applications.filter(
        app => app.applicationstatus === 'Rejected'
    ).length;

    return (

        <div className="container-fluid page-container">
            <h2 className="page-title">Dashboard</h2>

                <p className="page-subtitle">
                    Track and manage all your job applications in one place.
                </p>

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="custom-card h-100">
                        <h5>Total Applications</h5>
                        <h2>{total}</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="custom-card h-100">
                        <h5>Applied</h5>
                        <h2>{applied}</h2>
                    </div>
                </div>

                <div className="col-md-4">
                   <div className="custom-card h-100">
                        <h5>Interview Scheduled</h5>
                        <h2>{interview}</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="custom-card h-100">
                        <h5>Selected</h5>
                        <h2>{selected}</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="custom-card h-100">
                        <h5>Rejected</h5>
                        <h2>{rejected}</h2>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;
