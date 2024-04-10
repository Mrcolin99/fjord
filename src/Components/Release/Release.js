import brights from '../../Assets/brights-on.jpeg'
import amythyst from '../../Assets/amythysts.png'


function Release() {
    return (
        <div>
            <h3>Releases:</h3>
            <img className='brights' src={brights} />
            <img className='amythyst' src={amythyst} />
        </div>
    )
}

export default Release