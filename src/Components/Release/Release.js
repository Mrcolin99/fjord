import brights from '../../Assets/brights-on.jpeg'
import amythyst from '../../Assets/amythysts.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Release.css'

function Release() {
    return (
        <div className='main'>
            <div className='carousel'>
                <Carousel interval={3000} infiniteLoop={true} >
                    <div>
                        <img src={amythyst} />
                        <p className='legend'>"I love when a band I'm only marginally familiar with BLOWS MY DOORS OFF, and this Fjord Pony record fits the bill." -Top Connecticut Albums 2023, Chip McCabe</p>
                    </div>
                    <div>
                        <img src={brights} />
                        <p className='legend'>''Brights On' is an amazing album.
                            Combining the best of modern alt and indie rock while channeling classic rock, Fjord Pony feels like a crossover between Arctic Monkeys and Radiohead."
                            - Rock Era Magazine</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Release