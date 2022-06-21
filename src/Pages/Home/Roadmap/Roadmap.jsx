import React from "react";
import "./Roadmap.css";
import road from "../../../Assets/roadmap.webp";
function Roadmap() {
  return (
    <div className="roadmap">
      <div className="row-text">
        <div className="left-row">
          <h2 className="top-sub gest">the future of aircastle</h2>
          <h1 className="main-head">
            Morbi mi eros, sagittis ac porttitor dictum, semper in urna. Nunc
            dapibus ipsum sit amet magna euismod ullamcorper. Mauris felis urna,
            suscipit elementum libero in, varius lacinia nulla.
          </h1>
        </div>
        <div className="right-row">
          <p className="desc">
            Pellentesque tristique feugiat libero non hendrerit. Vivamus ornare
            velit id enim cursus dignissim. Fusce et suscipit tortor. Praesent
            sit amet sem dui. Maecenas sit amet sagittis lectus. Curabitur
            maximus, erat sed vehicula consequat, quam augue pulvinar metus,
            eget vehicula felis nulla eu nibh. Sed vitae euismod tellus, non
            sagittis odio. In tincidunt lobortis augue, nec vehicula lectus
            ultrices et.
          </p>
        </div>
      </div>
      <img src={road} alt="" />
      <div className="text-div">
        <h2 className="top-sub gest">THE DAO</h2>
        <h1 className="main-head">Aircastle DAO</h1>
        <p className="desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis
        </p>
      </div>
    </div>
  );
}

export default Roadmap;
