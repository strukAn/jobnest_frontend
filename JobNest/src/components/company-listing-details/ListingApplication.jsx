import { useEffect, useState } from 'react';
import { getApplicationStatuses } from '../../api/lookup.js'
import ApplicationStatusOption from './ApplicationStatusOption'

function ListingApplication({ application }) {
    if(application === undefined) return <></>;
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        (async () => {
        try {
            setStatuses(await getApplicationStatuses(application.applicationId))
          } catch (error) {
            console.log(error);
          }
        })();
    }, [])

    return <>
    <tr>
                            <td>
                                {`${application.firstName} ${application.lastName}`}
                            </td>
                            <td>
                                {application.email}
                            </td>
                            <td>
                                {application.message}
                            </td>
                            <td>
                                {new Date(application.createdAt).toLocaleDateString(navigator.language)}
                            </td>
                            <td>
                                {application.applicationStatus}
                            </td>
                            <td>
                                <form>
                                    <select name="status">
                                        {statuses.map(s => 
                                            <ApplicationStatusOption
                                                key={s.id}
                                                status={s}
                                            />
                                        )}
                                    </select>
                                    <button type="submit">
                                        Update
                                    </button>
                                </form>
                            </td>
                        </tr>
    </>
}

export default ListingApplication;