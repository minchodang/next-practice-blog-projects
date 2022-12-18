import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import Slider from "react-slick";

const StyledSlider = styled``;

export const StyledSliderComponents = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, //자동 재생 할 것인지
        autoplaySpeed: 4000,
    };
    return (
        <div>
            <h2> Single Item</h2>
            <StyledSlider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </StyledSlider        </div>
    );
};
