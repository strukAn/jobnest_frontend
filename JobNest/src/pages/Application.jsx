import {getListing} from "../api/listing"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../api/User";
import { postApplication } from "../api/application";

export default function Application({listingId}){

    const [letter, setLetter] = useState("");
    const [loading, setLoading] = useState(false);
    const letterRef = useRef();

    const submitApplication = async () =>{
      try {
        const motivationalLetter = {
            message: letter
        }
        setLoading(true);
        await postApplication(listingId, motivationalLetter);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      
    }

    useEffect(()=> {
      letterRef.current.focus();
    }, []);



    return(
        <>
            <h2 id = "formTitle" >Submit your application</h2>

            <form
                id="applicationForm"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="letter">Motivational letter:</label>
                <input
                type="text"
                id="letter"
                name="letter"
                value={letter}
                ref = {letterRef}
                onChange={(e) => setLetter(e.target.value)}
                />

                <div className="buttons">
                <button
                    type="button"
                    onClick={submitApplication}
                    disabled={loading}
                >
                    {loading ? "Submiting..." : "Submit"}
                </button>
                </div>
            </form>
            </>
    );
}