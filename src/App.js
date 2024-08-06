import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import {apiUrl,filterData} from './data'
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";
import Cards from "./Components/Cards";

function App(){

  const [category,setCategory] = useState(filterData[0].title)
  const [loading,setLoading] = useState(false);
  const [apiData,setApidata] = useState([])

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setApidata(responseData.data)
    }catch(err){
      toast.warn("Network Error")
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  },[])


  return(
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData = {filterData} setCategory={setCategory}/>
      </div>

      <div>
        {
          loading?<Spinner/>:<Cards category={category} apiData={apiData}/>
        }
      </div>
    </div>
  );
};


export default App