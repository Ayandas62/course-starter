

function Filter(props){

  const filterData = props.filterData
  const setCategory = props.setCategory;

  function clickHandler(title){
    setCategory(title)
  }

  return(
    <div className="flex flex-wrap justify-center gap-4">
      {
        filterData.map((filter)=>(
          <button key={filter.id} onClick={()=>clickHandler(filter.title)}>{filter.title}</button>
        ))
      }
    </div>
  );
};


export default Filter