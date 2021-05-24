import React from "react";
import './App.css';
import Shop from './images/Shop.jpg';
import Shoes from './images/Shoes.jpg';
import Clothes from './images/Clothes.jpg';
import Hats from './images/Hats.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>

		    <div class="topnav">
		    <Link to="/">Home</Link>
        <Link to="/Hats">Hats</Link>
		    <Link to="/clothes">Clothes</Link>
		    <Link to="/shoes">Shoes</Link>
        <Link to="/filter">Filter</Link>
		    </div>
        
        <Switch>

          <Route path="/filter">
            <Filter />
          </Route>
          <Route path="/shoes">
            <Footware />
          </Route>
          <Route path="/clothes">
            <Dress />
          </Route>
          <Route path="/Hats">
            <Headwear />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>

      </div>

    </Router>
  );
}

function Home() {
  return <div className="Home"><br/>Welcome to our shop<div>
    <br/>
        <div className="homepara">Our Shop provides a wide range of products such as Shoes, Hats, Clothes from a wide collection of brands. 
        </div>
  <br/>
  <div>
      <img src={Shop} alt="Shop. logo"/>
      </div>
  </div></div>;
}
  
function Headwear() {
  return <div className="Home">Hats<div>
    <br/>
        <div className="homepara">Hats can only be worn if you're willing to be jaunty, to set them at an angle and to walk beneath them with a spring in your stride as if you're only a step away from dancing....</div>
</div>
  <br/>
  <div>
      <img src={Hats} alt="head. logo"/>
      </div>
  </div>
}

function Dress() {
  return <div className="Dress"><br/>Clothes<div>
    <br/>
    <div className="homepara">Clothes mean nothing until someone lives in them.....</div>
  <div >
  <br/>
      <img src={Clothes} alt="cloth. logo" />
    </div>
  
  </div></div>;
}
  
function Footware() {
  return <div className="Home">Shoes<div>
    <br/>
        <div className="homepara">Shoes transform your body language and attitude. They lift you physically and emotionally......</div>
  <br/>
  <div>
      <img src={Shoes} alt="Shoe. logo"/>
      </div>
  </div></div>;
}

const courses = [
  {
      id: 1,
      title: "Hats",
      author: "50 Accessories",
      info:"Remove items related to Hats and Headwear",
      rating: true,

  },
  {
      id: 2,
      title: "Clothes",
      author: "120 Accessories",
      info:"Remove items related to Dress and Clothes",
      rating: true,
  },
  {
      id: 3,
      title: "Shoes",
      author: "30 Accessories",
      info:"Remove items related to Shoes and Footwear",
      rating: true,
  }
];

function Filter() {
  return(
      <div>
          <div className="filter">
            <br/>
              <div>Filter List</div>

              <hr />
              <CourseList/>
          </div>  

          
      </div>
  );
}

// function Onstatus(props) {
//   return <button type="button" className="buttonlistS" >SHOW</button>;
// }

// function Offstatus(props) {
//   return <button type="button" className="buttonlistH" onClick={activate}>HIDE</button>
// }

// function handleClick(msg) {
//   alert(msg);
// }

function CourseList() {
  return courses.map(function(course) {
      return(
          // <div key={course.id} className="courselist" onclick={() => handleClick(course.title)}>
          <div key={course.id} className="courselist">
              <div>
                  <span className="courselist1">{course.title}</span>
                  <br/>
                  <span className="accessorieslist">{course.author}</span>
                  <br/>
                  <span className="info">{course.info}</span>
                  <br/>
                  <button className="buttonlistS"  onClick={shoot}>Show</button>
                  <br/>
                    
                  {/* {course.rating ? (
                      <Onstatus />
                      ) : (
                      <Offstatus />
                  )} */}

              </div>
              
          </div>
      );
  });
}
const myelement = (
  <button onClick={shoot}>Show</button>
);




function shoot() {
  alert("Item Filtered");
}
