import SearchBar from "./common/Searchbar";
import {getCities, getDomains, getSeniorities, getTechnologies} from "../api/lookup"
import { useState, useEffect } from "react";

export default function Filters({
    query,
    onFilterChange
}) {

    const [technologies, setTechnologies] = useState([]);
    const [cities, setCities] = useState([]);
    const [domains, setDomains] = useState([]);
    const [seniorities, setSeniorities] = useState([]);

    const handleSearch = (value) => {
        console.log(value);
        onFilterChange("search", value);
    };

    useEffect(() => {
            
            const fetchTechnologies = async () => {
                try {
                   const data = await getTechnologies();
                    setTechnologies(
                        data
                    ); 
                } catch (error) {
                    console.log(error.response?.status)
                }
            };
    
            const fetchCities = async () => {
                try {
                   const data = await getCities();
                    setCities(
                        data
                    ); 
                } catch (error) {
                    console.log(error.response?.status)
                }
            };
    
            const fetchDomains = async () => {
                try {
                   const data = await getDomains();
                    setDomains(
                        data
                    ); 
                } catch (error) {
                    console.log(error.response?.status)
                }
            };
    
            const fetchSeniorities = async () => {
                try {
                   const data = await getSeniorities();
                    setSeniorities(
                        data
                    ); 
                } catch (error) {
                    console.log(error.response?.status)
                }
            };
    
            fetchTechnologies();
            fetchCities();
            fetchDomains();
            fetchSeniorities();
    
    }, []);

    return (
        <>
            <div>

                <SearchBar 
                    placeholder="Search listings.." 
                    onSearch={handleSearch}
                    className="mb-4"
                />


                <div className="row mb-4">

                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={query.technologyId}
                            onChange={(e) =>
                                onFilterChange("technologyId", e.target.value)
                            }
                        >
                            <option value="">All technologies</option>

                            {technologies.map(t => (
                                <option 
                                    key={t.id} 
                                    value={t.id}
                                >
                                    {t.name}
                                </option>
                            ))}

                        </select>
                    </div>



                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={query.cityId}
                            onChange={(e) =>
                                onFilterChange("cityId", e.target.value)
                            }
                        >

                            <option value="">All cities</option>

                            {cities.map(c => (
                                <option 
                                    key={c.id} 
                                    value={c.id}
                                >
                                    {c.name}
                                </option>
                            ))}

                        </select>
                    </div>




                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={query.domainId}
                            onChange={(e) =>
                                onFilterChange("domainId", e.target.value)
                            }
                        >

                            <option value="">All domains</option>

                            {domains.map(d => (
                                <option 
                                    key={d.id}
                                    value={d.id}
                                >
                                    {d.name}
                                </option>
                            ))}

                        </select>
                    </div>




                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={query.seniorityId}
                            onChange={(e) =>
                                onFilterChange("seniorityId", e.target.value)
                            }
                        >

                            <option value="">All seniorities</option>

                            {seniorities.map(s => (
                                <option
                                    key={s.id}
                                    value={s.id}
                                >
                                    {s.name}
                                </option>
                            ))}

                        </select>
                    </div>


                </div>




                <div className="row mb-4">

                    <div className="col-md-6">

                        <select
                            className="form-select"
                            value={query.sortBy}
                            onChange={(e)=>
                                onFilterChange("sortBy", e.target.value)
                            }
                        >

                            <option value="date">
                                Date
                            </option>

                            <option value="title">
                                Title
                            </option>

                        </select>

                    </div>



                    <div className="col-md-6">

                        <select
                            className="form-select"
                            value={query.sortOrder}
                            onChange={(e)=>
                                onFilterChange("sortOrder", e.target.value)
                            }
                        >

                            <option value="desc">
                                Descending
                            </option>

                            <option value="asc">
                                Ascending
                            </option>

                        </select>

                    </div>


                </div>


            </div>
        </>
        
    );
}