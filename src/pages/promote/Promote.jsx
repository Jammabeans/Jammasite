import React from 'react'
import { useSelector } from 'react-redux'
function Promote() {

    const {isDarkMode} = useSelector(state => state.theme)

    return (
        <div className="promote-container" style={{backgroundColor:isDarkMode ? `#272727` : `#fff`,
            color: isDarkMode ? `white` : `black`
        }}>
            <div className="promote">
                <img className="promote__image" src="https://coinhunt.cc/resources/Images/promote.svg" alt="" />
                <div className="promote__heading">
                    <h1 className="promote__title">
                    Promote a project to the Jamma games by using Jamma votes
                    </h1>
                    <h2 className="promote__subtitle">
                        Get the visibility you need.
                    </h2>
                </div>
                <br/>
                <br/>
               <h1>At the start of the Jamma Games several projects will be chosen to take part on the opening rounds. </h1>
               <br/>
                <br/>
            
            <h1>Jamma votes have not started yet.</h1>
            </div>


        </div>

        
    )
}

export default Promote
