import { useEffect, useState } from "react";
import { Tablet } from "./tabletinterface";
import Card from "./card";
import Navbar from "./navbar";

export default function Legolcsobb(){
    const [tablet,setTablet]=useState<Tablet[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        fetch('http://localhost:3000/3legolcsobb')
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
    return  <div>
     
        <table>
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Name</th>
      <th>Description</th>
      <th>Operating System</th>
      <th>Processor Clock Speed</th>
      <th>Processor Cores</th>
      <th>Screen Size</th>
      <th>Screen Resolution</th>
      <th>RAM Size</th>
      <th>Color Options</th>
      <th>Year</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {tablet.map((e) => (
      <tr key={e.product_id}>
        <td>{e.product_id}</td>
        <td>{e.name}</td>
        <td>{e.description}</td>
        <td>{e.operating_system}</td>
        <td>{e.processor_clock_speed}</td>
        <td>{e.processor_cores}</td>
        <td>{e.screen_size}</td>
        <td>{e.screen_resolution}</td>
        <td>{e.ram_size}</td>
        <td>{e.color_options}</td>
        <td>{e.year}</td>
        <td>{e.price}</td>
        <td>
          <span style={{ marginLeft: '10px', cursor: 'pointer' }}>
            <a href={`/tabletek-megjelen/${e.product_id}`}>megnézem</a>
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    

  
        
    
}