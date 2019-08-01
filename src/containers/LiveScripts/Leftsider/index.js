import React from 'react'
import './leftsider.css'

export default function index() {
    return (
        <div>
            
            <div  id="left_main_container"  >
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(element => 
                    <p style={{margin:"0px"}}>Some Script</p>
                )}
                </div>

        </div>
    )
}
