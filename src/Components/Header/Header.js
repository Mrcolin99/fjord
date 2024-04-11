import { Link } from 'react-router-dom'
import Release from '../Release/Release'
import About from '../About/About'
import './Header.css'

function Header() {
    return (
        <div className='main-div'>
            <Link to='/' element={<About />} className='home'>
                <h1>Fjord Pony</h1>
            </Link>
            <div className='sub'>
                <Link to='/releases' element={<Release />} className='release'>
                    <h3>Our Releases</h3>
                </Link>
                <h3>Shows</h3>
            </div>

        </div>
    )
}

export default Header