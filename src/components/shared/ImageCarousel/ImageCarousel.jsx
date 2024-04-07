import React from 'react';
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import styles from './ImageCarousel.module.css'; // Import the CSS module
import CustomButton from '../CustomButton/CustomButton';

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
    };

    return (
        <Box className={styles.carouselBox}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className={styles.imageSlide} />
                    </div>
                ))}
            </Slider>
            <div className={styles.infoOverlay}>
                <Box className={styles.infoBox}>
                    <Box marginBottom={7}>
                        <h2 className={styles.infoHeading}>Carry your Funk</h2>
                        <p className={styles.infoText}>Trendy handbags collection for your party animal</p>
                    </Box>
                    <CustomButton label={'See more'} icon={'east'} />
                </Box>
            </div>
        </Box>
    );
};

export default ImageCarousel;
