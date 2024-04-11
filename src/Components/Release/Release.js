import brights from '../../Assets/brights-on.jpeg';
import amythyst from '../../Assets/amythysts.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Release.css';

function Release() {
    return (
        <div className='main'>
            <p className='review1'>
                "Every so often, you kick over the right rock and discover a truly great album.
                'Brights On' is one of these hidden gems.
                Lovers of indie, alternative, and rock will love Fjord Pony's sound."
                - Third Half Music
            </p>
            <div className='carousel'>
                <Carousel interval={3000} infiniteLoop autoPlay>
                    <div>
                        <img src={amythyst} alt="Amythyst" />
                        <p className='legend'>"I love when a band I'm only marginally familiar with BLOWS MY DOORS OFF, and this Fjord Pony record fits the bill." -Top Connecticut Albums 2023, Chip McCabe</p>
                    </div>
                    <div>
                        <img src={brights} alt="Brights" />
                        <p className='legend'>''Brights On' is an amazing album. Combining the best of modern alt and indie rock while channeling classic rock, Fjord Pony feels like a crossover between Arctic Monkeys and Radiohead." - Rock Era Magazine</p>
                    </div>
                </Carousel>
            </div>
            <p className='review2'>
                "Such ingenious wit, earnest emotion, and swiftness of expression,
                Fjord Pony's resources of heartfelt invention are brilliantly revealed with 'Brights On'."
                - The Planet
            </p>
        </div>
    );
}

export default Release;
