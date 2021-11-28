import React from 'react'
import {RiLoader4Line, RiLoader5Line} from 'react-icons/ri'
function LoadingIndicator() {
    return (
        <div className="loadingIndicator">
            <h1>
                <span class="loadingIndicator__l1">l</span>  
                <span class="loadingIndicator__l2">o</span>  
                <span class="loadingIndicator__l3">a</span>  
                <span class="loadingIndicator__l4">d</span>  
                <span class="loadingIndicator__l5">i</span>  
                <span class="loadingIndicator__l6">n</span>  
                <span class="loadingIndicator__l7">g</span>
                <span class="loadingIndicator__l8">.</span>
                <span class="loadingIndicator__l9">.</span>
                <span class="loadingIndicator__l10">.</span>  
            </h1>
        </div>
    )
}

export default LoadingIndicator
