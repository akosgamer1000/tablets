import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Tablet } from "./tabletinterface";
import Legdrágább from "./3legdrágább";
import Legolcsobb from "./3legolcsobb";

export default function Kezdolap(){
    const [tablet,setTablet]=useState<Tablet[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        fetch('http://localhost:3000/tablets')
            .then((response) => {
               
               
                return response.json();
            })
            .then((data) => {
                setTablet(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return <>
        <Navbar></Navbar>
        <h2>A legdrágább</h2>
        <Legdrágább></Legdrágább>
        <h2>A legolcsobb</h2>
        <Legolcsobb></Legolcsobb>
        
    </>
}