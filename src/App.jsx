import Header from './components/Header/header';
import Intro from './components/Intro/intro';
import Content from './components/Content/content';
import Review from './components/Review/review';
import item1 from './assets/content2.png';
import item2 from './assets/review.png';
import Description from './components/Description/description';
import Explore from './components/Explore/explore';
import Evaluate from './components/Evaluate/evaluate';
import Feedback from './components/Feedback/feedback';
import Footer from './components/Footer/footer';



const review1 = {
    h2:'Discount up to 50% All Excursions',
    p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat,tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    img:item1,
    bg:'bg-third'
}
const review2 = {
  h2:'January’s Promo:Buy 1 Get 1 Free!',
  p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  img:item2,
  bg:'bg-main',
  flex:'flex-row-reverse'
}
function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Intro/>
      <Content/>
      <Review id={1} img={review1.img} h2={review1.h2} p={review1.p} bg={review1.bg}/>
      <Review id={2} img={review2.img} h2={review2.h2} p={review2.p} bg={review2.bg} flex={review2.flex}/>
      <Description/>
      <Explore/>
      <Evaluate/>
      <Feedback/>
      <Footer/>
      <div className="text-center py-2">
        <a href="http://www.freepik.com">Designed by Freepik</a>
        @cover by MR.TUYEN
      </div>
    </div>
  );
}

export default App;
