import React from 'react'
import './Blog.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Blog() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='blok'>

                <Slider {...settings}>
                    <div>
                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog3.jpg.pagespeed.ic.1xdCSz-YtN.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>

                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog2.jpg.pagespeed.ic.GhS7bSWfX3.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog1.jpg.pagespeed.ic.uwBTyfL9XH.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog3.jpg.pagespeed.ic.1xdCSz-YtN.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog2.jpg.pagespeed.ic.GhS7bSWfX3.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xblog1.jpg.pagespeed.ic.uwBTyfL9XH.webp" alt="" />
                        <h1>Start the automatic process</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Blog
