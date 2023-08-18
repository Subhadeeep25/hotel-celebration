import img1 from "../assets/images/banner.jpg";
import Prices from "./prices"
import "./banner.css";
export const Banner = () => {
  return (
    <div>
    <div class="image-container">
      <img className="img-fluid" src={img1} alt="Example" loading="lazy"/>
      <div><Prices/></div>
    </div>
    </div>
  );
};
