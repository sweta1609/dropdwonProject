import React,{ useState,useEffect} from 'react'
import  styled from "styled-components"

// styling container 
const ListContainer =styled.div`
  
      cursor:pointer;
      margin-bottom:1%;
      margin-top:2%;
      padding:1%;
      
      &:hover{
        border:1px solid hsl(20, 80%, 81%);
        background-color: hsl(20, 68%, 94%);
        border-radius:2px;
      }
`;

//icon component(ICON)
const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

// dropdown component
function Dropdown({placeholder,options}) {

  const[showmenu,setShowmenu] = useState(false)
  const[selectedValue,setSelectedValue] = useState()


 

  // opening/closing dropdown menu handler
  useEffect(()=>{
    const handler =()=>setShowmenu(false)
    window.addEventListener('click',handler)
    return()=>{
      window.removeEventListener('click',handler)
    }
  },[])


  // handling showmenu once mouse is hovered over  display container
   const handleMouseOver=(e)=>{
    e.stopPropagation()
    setShowmenu(!showmenu)
  }

// displaying label in div
  const getDisplay=()=>{
    if(selectedValue){
      return selectedValue.label
    }

    return placeholder
  }

// it will set value to option when clicked
 const itemOnClick=(option)=>{
  setSelectedValue(option)
 }





  return (
    <>
      <div style={styles.dropdownInput}  onMouseOver={handleMouseOver} >
        <div style={styles.conatiner}>
          <div style={styles.selectBox}>{getDisplay()}</div>
          <div style={styles.dropdownBox}>
             <Icon/>
          </div>
        </div>
          
      </div>
      
      {showmenu && (<div style={styles.listItems}>
      
        
              {
                options.map(option=>(<ListContainer key={option.value} onClick={()=>itemOnClick(option)} style={styles.selected}>{option.label}</ListContainer>))
              }
          
      </div>)}

    </>
  )
}

export default Dropdown


// style
const styles ={
  dropdownInput:{
    height:"50px",
    width:"30%",
    backgroundColor:"white",
    borderRadius:"5px",
    marginLeft:"35%",
    marginTop:"2%",
    boxShadow:"2px 2px 10px 5px lightgrey"
  },
  conatiner:{
    display:"flex",
    marginTop:"5%",
    padding:"3% 0% 0% 0%",
    justifyContent:"space-between"
  },
  dropdownBox:{
    height:"40%",
    width:"5%",
    marginRight:"4%"
    },
  selectBox:{
    marginLeft:"5%"
  },
  listItems:{
    height:"",
    width:"35%",
    backgroundColor:"white",
    marginTop:"0.5%",
    borderRadius:"5px",
    marginLeft:"35%",
    boxShadow:"2px 2px 10px 5px lightgrey"
  }

}