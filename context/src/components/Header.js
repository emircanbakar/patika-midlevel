
import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useTheme()

    return (
        <div>
            <span>active theme : {theme} </span><br />
        </div>
    )
}

export default Button
