import img1 from "../assets/images/banner.jpg";
import { Form } from "./form";
import {Gallery} from "./gallery"
import "./banner.css";
export const Banner = () => {
  return (
    <div>
    <div class="image-container">
      <img className="img-fluid" src={img1} alt="Example" />
      <div class="overlay"></div>
    </div>
    <Form/> 
    <Gallery/>
    </div>
  );
};
