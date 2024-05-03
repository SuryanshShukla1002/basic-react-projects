import './App.css';
import Accordian from './components/accordion';
import StarRating from './components/starRating';
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
     <Accordian/>
     {/* Star rating */}
     <StarRating noOfStars= {10} />
    </div>
  );
}

export default App;
