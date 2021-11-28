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
                        Promote a project in the Jamma Games
                    </h1>
                    <h2 className="promote__subtitle">
                        Get the visibility you need.
                    </h2>
                </div>
                {/* <div className="promote__row">

                    <div className="promote__col">
                        <p>Average daily users</p><span>100 000</span>
                    </div>

                    <div className="promote__col">
                        <p>Twitter followers</p><span>36 000</span>
                    </div>

                    <div className="promote__col">
                        <p>Newsletter subscribers</p><span>7 000</span>
                    </div>

                </div> */}
                
                {/* <div className="promote__row  promote__row__alexa">
                    <p className="promote__row__title">
                        Official Alexa rank by Amazon
                    </p>
                    <a className="promote__row__link" href="https://www.alexa.com/siteinfo/coinhunt.cc">coinhunt.cc Competitive Analysis, Marketing Mix and Traffic - Alexa</a>
                </div>

                <div className="promote__contant">

                    <h2 className="promote__contact__title">To promote your coin</h2>
                    <a 
                        href="mailto:contact@coinhunt.cc?subject=Promotion%20for%20our%20coin%20on%20Coinhunt&amp;body=Hi%2C%20We%20would%20like%20to%20promote%20our%20coin%20on%20coinhunt.cc" 
                        className="promote__contact__link"
                    >
                    Mail to: contact@coinhunt.cc
                    </a>
                    <p className="promote__contact__text">Do never pay anyone for a promotion on our platform, unless you have received a confirmation email from this address.</p>

                </div> */}
            </div>
        </div>
    )
}

export default Promote
