import React from 'react';
import PropType from 'prop-types'

const FuncComp =(props)=>{

    return (
        <div>
             Hello Functional component 
             with props {props.value}
        </div>
    )

}

FuncComp.propTypes = {
    value : PropType.string
}


export default FuncComp;