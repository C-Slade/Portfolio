import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import images from './carousel-images';
import uuid from 'uuid';

const inital_index = 0;

const Carousel = () => {
    const inInterval = React.useRef(true)
    const [index, setIndex] = React.useState(inital_index);

    const setCarouselIndex = (i) => {
        if (!inInterval.current) {
            setIndex(i)
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(inital_index)
            } else {
                setIndex(index + 1)
            }

            inInterval.current = true
        }, 3500);

        return () => {
            clearInterval(interval)
            inInterval.current = false
        }
    }, [index])

    return (
        <div className="carousel">
            <Gallery
            style={{
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
                index={index}
                onRequestChange={i => {
                    setCarouselIndex(i)
                }}
            >
                {images.map(image => (
                    <GalleryImage src={image} key={uuid.v4()}/>
                ))}
            </Gallery>
        </div>
    )
}

export default Carousel;