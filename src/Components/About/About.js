import bandPic from '../../Assets/fjordponybandphoto2.jpg'
import './About.css'

function About() {
    return (
        <div>
            <div className='body'>
                <h3>About Us</h3>
                <div className='img-contain'>
                <p className='description'>
                    Fjord Pony is an indie rock band whose homebase is Middletown, Connecticut. When they roll up their sleeves and dive into the DIY recording process at their studio clubhouse, it's all about the songwriting—no gimmicks, no tricks. Summoning the ghosts of pop, post-punk, British Invasion, prog rock, alt-country, and the California sound, the band channels their distinct and intersecting influences into a halcyon mashup. Fjord Pony is songwriter Chris Wiedemann (vocals/guitar, left center), Rick Ciervo (keys/guitar, right center), Mike Mongillo (bass guitar, left), and Jesse Alford (drums/percussion, right). And in case you were wondering, no, the name Fjord Pony does not have a satisfying backstory.
                </p>
                    <img className='band-pic' src={bandPic} />
                </div>
            </div>
        </div>
    )
}

export default About