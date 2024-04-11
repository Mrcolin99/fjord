import bandPic from '../../Assets/fjordponybandphoto2.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './About.css';

function About() {
    return (
        <div className='container'>
            <div className='side-bar'>
                <p className='description'>
                    Fjord Pony is an indie rock band whose homebase is Middletown, Connecticut. When they roll up their sleeves and dive into the DIY recording process at their studio clubhouse, it's all about the songwriting—no gimmicks, no tricks. Summoning the ghosts of pop, post-punk, British Invasion, prog rock, alt-country, and the California sound, the band channels their distinct and intersecting influences into a halcyon mashup. Fjord Pony is songwriter Chris Wiedemann (vocals/guitar, left center), Rick Ciervo (keys/guitar, right center), Mike Mongillo (bass guitar, left), and Jesse Alford (drums/percussion, right). And in case you were wondering, no, the name Fjord Pony does not have a satisfying backstory.
                </p>
            </div>
            <img className='band-pic' src={bandPic} alt="Fjord Pony Band" />

            <div className="carousel-container">
                <Carousel showThumbs={false} interval={3000} infiniteLoop autoPlay>
                    <div>
                        <p className='quote'> "Every so often, you kick over the right rock and discover a truly great album.
                'Brights On' is one of these hidden gems.
                Lovers of indie, alternative, and rock will love Fjord Pony's sound."
                - Third Half Music</p>
                    </div>
                    <div>
                        <p className='quote'>  "Such ingenious wit, earnest emotion, and swiftness of expression,
                Fjord Pony's resources of heartfelt invention are brilliantly revealed with 'Brights On'."
                - The Planet</p>
                    </div>
                    <div>
                        <p className='quote'>
                        "I love when a band I'm only marginally familiar with BLOWS MY DOORS OFF, and this Fjord Pony record fits the bill." -Top Connecticut Albums 2023, Chip McCabe
                        </p>
                    </div>
                    <div>
                        <p className='quote'>
                        'Brights On' is an amazing album. Combining the best of modern alt and indie rock while channeling classic rock, Fjord Pony feels like a crossover between Arctic Monkeys and Radiohead." - Rock Era Magazine
                        </p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default About;
