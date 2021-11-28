import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeActions } from '../../Redux/themeSlice/themeSlice'
function ThemeToggle(props) {


    const {isDarkMode} = useSelector(state => state.theme)

    console.log(isDarkMode)

    //const [theme, setTheme] = useState(false)

    const dispatch = useDispatch()
    
    const setTheme = () =>{
        dispatch(themeActions.setTheme(!isDarkMode))
    }
    

    return (
        <div onClick={setTheme} className={`themeToggle ${ !isDarkMode ? `themeToggle-active` : `themeToggle-deactive`} `}>
            <div className="themeToggle__dot" />
        </div>
    )
}

export default ThemeToggle
