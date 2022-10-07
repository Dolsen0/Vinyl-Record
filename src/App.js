import record from './images/record.svg'
import './App.css';

function App() {

  const options = ['Add', 'View', 'Update']


  return (
    <div className="App">
      <header className="App-header">
        <h2>Vinyl Record</h2>
        <h5>Record your vinyl</h5>
        <img src={record} className="App-logo" alt="logo" />  
        {options.map((option) => {
          return(
            <div key={option} onClick={()=>{
              console.log(`are you ready to ${option}?`)
            }}>
              {option}
            </div>
          )
        })}
      
      </header>
    </div>

  );
}

export default App;
