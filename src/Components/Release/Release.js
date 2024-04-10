import brights from '../../Assets/brights-on.jpeg'
import amythyst from '../../Assets/amythysts.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Release.css'

function Release() {
    return (
        <div className='main'>
            <h3>Releases:</h3>
            <div className='carousel'>
                <Carousel>
                    <div>
                        <img src={amythyst} />
                    </div>
                    <div>
                        <img src={brights} />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Release