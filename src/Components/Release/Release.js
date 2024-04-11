import brights from '../../Assets/brights-on.jpeg';
import amythyst from '../../Assets/amythysts.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Release.css';

function Release() {
    return (
        <div className='main'>
            <div className='carousel'>
                <Carousel interval={3000} infiniteLoop autoPlay>
                    <div>
                        <img src={amythyst} alt="Amythyst" />
                    </div>
                    <div>
                        <img src={brights} alt="Brights" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Release;
