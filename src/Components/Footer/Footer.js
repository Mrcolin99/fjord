import './Footer.css'
import bandcamp from '../../Assets/bc-bandcamp-logo.png'
import facebook from '../../Assets/facebook.png'
import insta from '../../Assets/instagram.png'
import apple from '../../Assets/music.png'
import nap from '../../Assets/napster.png'
import amazon from '../../Assets/social.png'
import spot from '../../Assets/spotify-logo.png'
import tube from '../../Assets/youtube.png'

function Footer() {
    return (
        <div className='main-foot'>
            <a href='https://www.instagram.com/fjordponyband/' className='insta'>
            <img src={insta} className='icon'/>
            </a>
            <a href='https://fjordpony.bandcamp.com/album/brights-on' className='bandcamp'>
                <img src={bandcamp} className='icon'/>
            </a>
            <a href='https://music.apple.com/us/album/brights-on/1661083224' className='apple'>
            <img src={apple} className='icon'/>
            </a>
            <a href='https://open.spotify.com/album/6IOkSApwF319mzgALZP0Z5' className='spotify'>
            <img src={spot} className='icon'/>
            </a>
            <a href='https://web.napster.com/artist/fjord-pony/album/brights-on?catalog=us' className='napster'>
            <img src={nap} className='icon'/>
            </a>
            <a href='https://www.youtube.com/watch?v=9atDVuVrUFs&list=OLAK5uy_mX9mThTNP3UVA_Grljno_I_qVsmCW4VQ8' className='youtube'>
            <img src={tube} className='icon'/>
            </a>
            <a href='https://music.amazon.com/albums/B0BQV1CYH2' className='amazon'>
            <img src={amazon} className='icon'/>
            </a>
            <a href='https://www.facebook.com/fjordponymusic' className='facebook'>
            <img src={facebook} className='icon'/>
            </a>

        </div>
    )
}

export default Footer