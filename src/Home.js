import React from "react";
import amazonBanner from "./assets/amazon_banner.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={amazonBanner} alt="Amazon Banner" />
        <div className="home-row">
          <Product
            id="4903850"
            title="Meditations - Paperback"
            price={28.62}
            image="https://m.media-amazon.com/images/P/0140449337.01._SCLZZZZZZZ_SX500_.jpg"
            rating={5}
          />

          <Product
            title="Apple Pencil (2nd Generation)"
            price={150}
            image="https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_SL1024_.jpg"
            rating={4}
            id="7123572"
          />
        </div>
        <div className="home-row">
          <Product
            title="DASH Stand Mixer (Electric Mixer for Everyday Use):
             6 Speed Stand - Red, DCSM250RD"
            price={60}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
            rating={5}
            id="1280305"
          />
          <Product
            title="BISON Kids Cute Winter Ski, Snowboard Mitten Outdoor Snow Gloves for Baby Little Kids Boys and Girls"
            price={15.29}
            image="https://m.media-amazon.com/images/I/51oDBKTjUPL._AC_.jpg"
            rating={3}
            id="1093464"
          />
          <Product
            title="Xbox Series S - Xbox Digital Only Console Latest Generation"
            price={379}
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg"
            rating={4}
            id="8098743"
          />
        </div>
        <div className="home-row">
          <Product
            title="The Lost City of the Monkey God: A True Story"
            price={8.55}
            image="https://images-na.ssl-images-amazon.com/images/I/5108R4PMLLL._SX334_BO1,204,203,200_.jpg"
            rating={5}
            id="1034976"
          />
        </div>
        <div className="home-row">
          <Product
            title="DJI Air 2S - Drone Quadcopter UAV with 3-Axis Gimbal Camera, 5.4K Video, 4 Directions of Obstacle Sensing, 31-Min Flight Time, Max 7.5-Mile Video Transmission, Gray"
            price={1249}
            image="https://m.media-amazon.com/images/I/61OQEmuM6hL._AC_SL1500_.jpg"
            rating={5}
            id="9991012"
          />
          <Product
            title="Protocol Punching Ball Adjustable Height Withstands Tough Beatings Great Value"
            price={147.19}
            image="https://m.media-amazon.com/images/I/71Ztcf8ZTfL._AC_SL1500_.jpg"
            rating={4}
            id="1420086"
          />
        </div>
        <div className="home-row">
          <Product
            title="Elden Ring - PlayStation 5 Edition"
            price={79.99}
            image="https://m.media-amazon.com/images/I/81goNGEYm6L._AC_SL1500_.jpg"
            rating={5}
            id="31509436"
          />
          <Product
            title="Dragon Incense Holders Ceramic Backflow Handcraft Incense Burner with 40 Pcs Incense Cone and 50 Pcs Incense Sticks"
            price={42.99}
            image="https://m.media-amazon.com/images/I/71LL3B4wvWS._AC_SL1500_.jpg"
            rating={3}
            id="3163095"
          />
          <Product
            title="CHARMOUNT Corner Shower Caddy, Adhesive Metal Bathroom Organizer Corner Shower Shelf, No Drill Wall Mounted Shower Storage Rack (1 Pack, Black)"
            price={17.99}
            image="https://m.media-amazon.com/images/I/61qTe0pxwbL._AC_SL1341_.jpg"
            rating={5}
            id="1111111"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
