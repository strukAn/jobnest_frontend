import {getListing} from "../api/listing"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../api/User";
import { getApplicationsByListing } from "../api/application";
import ListingApplication from "../components/company-listing-details/ListingApplication";

function ApplicationsTable({ count, applications }) {
    return count > 0 ?
                 <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Last updated</th>
                            <th>Status</th>
                            <th>Set status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {applications.map(app => 
                                <ListingApplication
                                    key={app.applicationId}
                                    application={app}
                                />)}
                        </tbody>
                    </table>
                    : <><p>No applications found</p></>;
}

function RoleBasedView({ applications, role }) {
    return  role === "company" ?
    <>
                        <div className="card-footer bg-white d-flex justify-content-between">
                        <h2>Applications</h2>
                            <ApplicationsTable
                                count={applications.totalCount}
                                applications={applications.list}
                            />
                        </div>
                        </>
                    : 
                    <>
                        <div className="card-footer bg-white d-flex justify-content-between">
                            <Link 
                                to="/listings"
                                className="btn btn-outline-secondary"
                            >
                                Back
                            </Link>

                            <button className="btn btn-primary">
                                Apply
                            </button>
                        </div>
                    </>
}

export default function ListingDetails({id}){

    const [listing, setListing] = useState(0);
    const [applications, setApplications] = useState({
        list: [],
        paging: {
            pageSize: 0,
            pageNumber: 0
        },
        totalCount: 0
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchListing = async () => {
            try {
                setLoading(true);
                const data = await getListing(id);
                setListing(data);
                setApplications(await getApplicationsByListing(10, 1, id));
                setLoading(false);
            } catch (error) {
                console.log(error.response?.status)
            }
        };

        fetchListing();

    }, []);



    return(
        <>
                <div className="container mt-4">
                    <div className="card shadow-sm">
                        
                        <div className="card-header bg-white d-flex justify-content-between align-items-center">
                            <div>
                                <h2 className="mb-1">
                                    {listing.title}
                                </h2>

                                <h5 className="text-muted mb-0">
                                    {listing.companyName}
                                </h5>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="mb-3">
                                Description
                            </h5>
                            <p className="lead">
                                {listing.description}
                            </p>
                            <hr />
                            <div className="row">

                                <div className="col-md-6">
                                    <p>
                                        <strong>Domain:</strong> {listing.domainName}
                                    </p>

                                    <p>
                                        <strong>Seniority:</strong> {listing.seniorityName}
                                    </p>

                                    <p>
                                        <strong>Location:</strong> {listing.cityName}
                                    </p>

                                    <p>
                                        <strong>Postal code:</strong> {listing.postalCode}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        <strong>Office address:</strong> {listing.officeAddress}
                                    </p>

                                    <p>
                                        <strong>Posted:</strong>{" "}
                                        {new Date(listing.createdAt)
                                            .toLocaleDateString(navigator.language)}
                                    </p>

                                    <p>
                                        <strong>Favorite:</strong>{" "}
                                        {listing.isFavorite ? "⭐ Yes" : "No"}
                                    </p>
                                </div>

                            </div>

                            <hr />

                            <h5>
                                Company
                            </h5>
                            <p>
                                {listing.companyName}
                            </p>

                            {listing.websiteLink && (
                                <a 
                                    href={`https://${listing.websiteLink}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit company website
                                </a>
                            )}

                        </div>

                        <RoleBasedView 
                            applications={applications}
                            role="company"
                        />

                    </div>
                </div>
            );
        </>
    );
}