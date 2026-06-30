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
                <div className="container mt-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 id="formTitle" className="card-title mb-4">
                                Submit your application
                            </h2>

                            <form
                                id="applicationForm"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="mb-3">
                                    <label 
                                        htmlFor="letter" 
                                        className="form-label"
                                    >
                                        Motivational letter:
                                    </label>

                                    <textarea
                                        className="form-control"
                                        id="letter"
                                        name="letter"
                                        rows="6"
                                        value={letter}
                                        ref={letterRef}
                                        onChange={(e) => setLetter(e.target.value)}
                                        placeholder="Write your motivational letter..."
                                    />
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={submitApplication}
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    );
}