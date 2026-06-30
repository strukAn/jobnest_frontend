import { useEffect, useState } from 'react'
import { getCompany } from '../../api/company.js'
import { getListing } from '../../api/listing.js'
import { getListingTechnologies } from '../../api/technology.js'
import { getApplicationsByListing } from '../../api/application.js'
import { useUser } from '../../api/User.js'
import { Link } from 'react-router-dom'
import './CompanyListingDetails.css'
import ListingApplication from './ListingApplication.jsx'

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

function CompanyListingDetails() {
    const [listing, setListing] = useState({});
    const [technologies, setTechnologies] = useState([]);
    const [applications, setApplications] = useState({
        list: [],
        paging: {
            pageSize: 0,
            pageNumber: 0
        },
        totalCount: 0
    });
      
      useEffect(() => {
        (async () => {
          try {
            const tempListing = await getListing('6af168d3-310b-4b20-8d67-1ec5852582cd');
            setListing(tempListing);
            setTechnologies(await getListingTechnologies(tempListing.id));
            const tempApp = await getApplicationsByListing(10, 1, tempListing.id);
            setApplications(tempApp);
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);

      console.log(applications);

    return <>
            <div className="page">
                <section className="listing-details">
                    <h1>{listing.title}</h1>
                    <div className="details-grid">
                        <div>
                            <strong>Company: </strong>
                            <span>{listing.companyName}</span>
                        </div>
                        <div>
                            <strong>Office: </strong>
                            <span>{`${listing.officeAddress}, ${listing.cityName}`}</span>
                        </div>
                        <div>
                            <strong>Seniority: </strong>
                            <span>{listing.seniorityName}</span>
                        </div>
                        <div>
                            <strong>Domain: </strong>
                            <span>{listing.domainName}</span>
                        </div>
                        <div>
                            <strong>Website: </strong>
                            <span><Link to={listing.websiteLink} target='blank'>{listing.websiteLink}</Link></span>
                        </div>
                        <div>
                            <strong>Created: </strong>
                            <span>{new Date(listing.createdAt).toLocaleDateString(navigator.language)}</span>
                        </div>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p>
                            {listing.description}
                        </p>
                    </div>
                    <div className="technologies">
                        <h2>Required Technologies</h2>
                        <ul>
                            {technologies.map(t => <li key={t.id}>{t.name}</li>)}
                        </ul>
                    </div>
                </section>
                <section className="applications">
                    <h2>Applications</h2>
                    <ApplicationsTable
                        count={applications.totalCount}
                        applications={applications.list}
                    />
                </section>
            </div>
        </>
}

export default CompanyListingDetails