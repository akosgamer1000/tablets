import { useEffect, useState } from "react";
import { Tablet } from "./tabletinterface";
import Card from "./card";
import Navbar from "./navbar";

export default function Tabletsearch(){
    const [tablet, setTablet] = useState<Tablet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredtablet, setFilteredTablet] = useState<Tablet[]>([]);
    const[SearchTerm, setSearchTerm]= useState('')
    const [sortConfig, setSortConfig] = useState<{ key: keyof Tablet; direction: 'asc' | 'desc' } | null>(null);
    useEffect(() => {

        fetch('http://localhost:3000/tablets')
            .then((response) => {
               
               
                return response.json();
            })
            .then((data) => {
                setTablet(data);
                setFilteredTablet(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = tablet.filter(
            (tablet) =>
               tablet.name.toLowerCase().includes(term) 
              
                
        );
        setFilteredTablet(filtered);
    };
    const sortTablet = (key: keyof Tablet, direction: 'asc' | 'desc') => {
        const sortedPhones = [...filteredtablet].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredTablet(sortedPhones);
        setSortConfig({ key, direction });
    };
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return  <div>
        <Navbar></Navbar>

        <table>
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Name <button
                                onClick={() => sortTablet('name', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('name', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Description</th>
      <th>Operating System </th>
      <th>Processor Clock Speed <button
                                onClick={() => sortTablet('processor_clock_speed', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('processor_clock_speed', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Processor Cores <button
                                onClick={() => sortTablet('processor_cores', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('processor_cores', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Screen Size <button
                                onClick={() => sortTablet('screen_size', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('screen_size', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Screen Resolution<button
                                onClick={() => sortTablet('screen_resolution', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('screen_resolution', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>RAM Size <button
                                onClick={() => sortTablet('ram_size', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('ram_size', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Color Options</th>
      <th>Year <button
                                onClick={() => sortTablet('year', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('year', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Price <button
                                onClick={() => sortTablet('price', 'asc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8593;
                            </button>
                            <button
                                onClick={() => sortTablet('price', 'desc')}
                                style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                            >
                                &#8595;
                            </button></th>
      <th>Action</th>
      <th><input
       type="text"
       value={SearchTerm}
       onChange={handleSearch}
       ></input></th>
    </tr>
  </thead>
  <tbody>
    {filteredtablet.map((e) => (
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