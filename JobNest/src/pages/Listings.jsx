import NavBar from "../components/common/Navbar";
import {getListings} from "../api/listing"
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
import ListingsList from "../components/ListingsList";
import Pagination from "../components/common/Pagination";

export default function Listings(){

    const [technologies, setTechnologies] = useState([]);
    const [cities, setCities] = useState([]);
    const [domains, setDomains] = useState([]);
    const [seniorities, setSeniorities] = useState([]);
    const[listings, setListings] = useState([]);
    const[loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const[query, setQuery] = useState({
        search: "",
        technologyId: "",
        domainId: "",
        cityId:"",
        seniorityId: "",
        sortBy: "date",
        sortOrder:"desc",
        isFavorite: false
    });
    const [paging, setPaging] = useState({
        pageSize: 1,
        pageNumber: 1
    })

    useEffect(() => {

        const fetchListings = async () => {
            try {
                setLoading(true);
                const data = await getListings(paging.pageSize, paging.pageNumber, query);
                setListings(data.list);
                paging.pageNumber = data.paging.pageNumber;
                paging.pageSize = data.paging.pageSize;
                setTotalCount(data.totalCount); 
                setLoading(false);
            } catch (error) {
                console.log(error.response?.status)
            }
        };

        fetchListings();

    }, [query, paging]);


    const totalPages = Math.ceil(totalCount / paging.pageSize);

    const changeFilter = (name, value) => {
        console.log(query.search);
        setQuery(prev => ({
            ...prev,
            [name]: value
        }));
        

        setPaging(prev => ({
            ...prev,
            pageNumber: 1
        }));
    }

    const changePage = (page) => {
        setPaging(prev => ({
            ...prev,
            pageNumber: page
        }));
    };

    return(
        <>
            <div className="container mt-4">
                <Filters
                    query={query}
                    onFilterChange={changeFilter}
                />
                {loading ? <strong> Loading... </strong> : 
                    <ListingsList listings={listings}/>
                }
                
                <Pagination
                    currentPage={paging.pageNumber}
                    totalPages={totalPages}
                    onPageChange={changePage}
                />

            </div>
        </>

    );
}