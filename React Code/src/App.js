import logo from './logo.svg';
import './App.css';
import FetchData from './Data/FetchData'
import {useState,useMemo} from 'react'
import Catalog from "./Components/Catalog.js"
import Pagination from './Components/Pagination'
import { getAccordionDetailsUtilityClass } from '@mui/material';

function App() {
  const [data,setData] = useState(false)
  const [currPage,setPage] = useState(1)

  return (
    <>
  <FetchData setData={setData} /> 
   
   { !data?<h1>Loading.........</h1>: <div style={{display:'flex',flexDirection:'column',padding:'5vw',alignItems:'center'}}>
    <Pagination setPage={setPage} page={currPage}/>
    <Catalog data={data} page={currPage}/>
    <Pagination setPage={setPage} page={currPage}/>
    </div>
    }
    </>
  );
}





export default App;
