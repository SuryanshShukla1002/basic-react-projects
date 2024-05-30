import './App.css';
import Accordian from './components/accordion';
import ImageSlider from './components/image-slider';
import StarRating from './components/starRating';
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
     <Accordian/>
     {/* Star rating */}
     <StarRating noOfStars= {10} />
     {/* IMage slider  */}
     <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
    </div>
  );
}

export default App;
