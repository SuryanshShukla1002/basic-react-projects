import './App.css';
import Accordian from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import StarRating from './components/starRating';
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      ACCORDIAN
      <Accordian />
      {/* Star rating */}
      STAR RATING 
      <StarRating noOfStars={10} />
      {/* IMage slider  */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      {/* Load more components data  */}
      LOAD MORE DATA BUTTON 
      
      <LoadMoreData/>
    </div>
  );
}

export default App;
