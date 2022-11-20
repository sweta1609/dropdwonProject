import Dropdown from "./component/Dropdown";



function App() {
  // options (created for dropdown select)
  const options=[
    {value:'React',label:'ReactJs'},
    {value:"Javascript",label:"Javascript"},
    {value:"html",label:"HTML5"},
    {value:"css",label:"CSS3"}
  ]
  return (
    <div className="App">
      {/* heading */}
      <h1 style={styles.heading}>Should you use a dropdown?</h1>
      {/* dropdown component */}
      <Dropdown placeholder="Select...." options={options}/>
    </div>
  );
}

export default App;

// styling component
const styles={
  heading:{
    height:"30%",
    width:"35%",
    marginLeft:"33%",
    marginTop:"15%"
  }
}


