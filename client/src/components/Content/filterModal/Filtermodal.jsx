import React from 'react'
import "./filtermodal.scss"
import {Slider} from "@material-ui/core"
const Filtermodal = (props) => {

    const {price,setPrice}=props

    return (
        <div className='slider'>
        <Slider
            value={price}
            onChange={( e, newValue ) => {
                setPrice( newValue );
            }}
            aria-labelledby="range-slider"
            max={50e2}
        />
        <div>
            <input type='number' onChange={( e ) => {
                if ( e.target.value <= 5000 ) {
                    if ( +e.target.value >= 0 && +e.target.value <= 5000 ) {
                        setPrice( [ e.target.value, price[ 1 ] ] )
                    }
                } else {
                    setPrice( [ 5000, price[ 1 ] ] )
                }
            }}
                value={price[ 0 ]}
            />
            <span> - </span>
            <input type='number' placeholder='pos' onChange={( e ) => {
                if ( e.target.value <= 1000 ) {
                    if ( +e.target.value >= 0 && +e.target.value <= 1000) {
                        setPrice( [ price[ 0 ], e.target.value ] )
                    }
                } else {
                    setPrice( [ price[ 0 ], 1000 ] )
                }
            }}
                value={price[ 1 ]}
            />
        </div>
    </div>
    )
}

export default Filtermodal
