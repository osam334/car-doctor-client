
import img1 from "../../../assets/assets/images/banner/1.jpg"
import img2 from "../../../assets/assets/images/banner/2.jpg"
import img3 from "../../../assets/assets/images/banner/3.jpg"
import img4 from "../../../assets/assets/images/banner/4.jpg"
import img5 from "../../../assets/assets/images/banner/5.jpg"
import img6 from "../../../assets/assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full  rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21, 0)]  left-0 top-0 bottom-0">
                   <div className="text-white space-y-7 w-1/2 ">
                    <h2 className="text-6xl font-bold">Afforded Price for Car Serviceing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident earum ipsam iste nihil molestiae laborum cupiditate asperiores, quisquam quaerat.</p>

                    <div>
                    <button className="btn btn-primary mr-5">Latest Project</button>
                    <button className="btn btn-outline btn-secondary">Discover More</button>
                   
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-12 h-full  rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21, 0)]  left-0 top-0 bottom-0">
                   <div className="text-white space-y-7 w-1/2 ">
                    <h2 className="text-6xl font-bold">Afforded Price for Car Serviceing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident earum ipsam iste nihil molestiae laborum cupiditate asperiores, quisquam quaerat.</p>

                    <div>
                    <button className="btn btn-primary mr-5">Latest Project</button>
                    <button className="btn btn-outline btn-secondary">Discover More</button>
                   
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;