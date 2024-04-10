import { Link }from 'react-router-dom'
import Release from '../Release/Release'
import  About from '../About/About'

function Header() {
    return (
        <div className='main-div'>
            <Link to='/' element={<About />}>
            <h1>Fjord Pony</h1>
            </Link>
            <Link to='/releases' element={<Release />} className='release'> 
            <h3 >Our Releases</h3>
            </Link>

        </div>
    )
}

export default Header