import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       <div>Test {movieRating}</div>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
