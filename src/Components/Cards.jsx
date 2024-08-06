import Card from './Card'

function Cards(props){

  const category  = props.category;
  const apiData = props.apiData;
  // console.log(apiData);

  function getCourseData(){
    if(category === "All"){
      let allCourse  = [];
      Object.values(apiData).forEach((array)=>{
        array.forEach((courseData)=>{
          allCourse.push(courseData);
        })
      })
      return allCourse;
    }else{
      return apiData[category];
    }
  }

    return(
      <div className='flex flex-wrap justify-center gap-4'>
            {
              getCourseData().map((course)=>(
                <Card key={course.id} {...course} />
              ))
            }
      </div>
    );
  };
  
  
  export default Cards