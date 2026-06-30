import { Link } from "react-router-dom";

export default function ListingsList({ listings }) {
    if (listings.length === 0) {
        return <p>No listings found.</p>;
    }

    return (
        <div className="row">
            {listings.map((listing) => (
                <div
                    key={listing.id}
                    className="col-md-6 col-lg-4 mb-4"
                >
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">
                                {listing.title}
                            </h5>
                            <h6 className="text-muted">
                                {listing.companyName}
                            </h6>

                            <p className="card-text mt-3">
                                {listing.description}
                            </p>
                            <hr />
                            <p className="mb-1">
                                <strong>Location:</strong> {listing.cityName}
                            </p>
                            <p className="mb-1">
                                <strong>Address:</strong> {listing.officeAddress}
                            </p>
                            <p className="mb-1">
                                <strong>Seniority:</strong> {listing.seniorityName}
                            </p>
                            <p className="mb-1">
                                <strong>Domain:</strong> {listing.domainName}
                            </p>
                            <p className="mb-1">
                                <strong>Posted:</strong>{" "}
                                {new Date(listing.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="card-footer bg-white">
                            <Link to="/">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}