/*
import React from 'react';
import MyContext from './Context'


function Component2 (props) {
    return(
        <div>
            <h2>Component2</h2>
            <MyContext.Consumer>
                {
                    (ctxString) => {
                        return (<h1>{ctxString}</h1>)
                    }
                }
            </MyContext.Consumer>
        </div>
    );
}


export default Component2

See below for a different way to get the same result(and to add another header)
==============================================================================
*/


import React, {useContext}from 'react';
import MyContext from './Context'


function Component2 (props) {
    
    const ctxString = useContext(MyContext)
    return(
        <div>
            <h2>Component2</h2>
            <MyContext.Consumer>
                {
                    (ctxString) => {
                        return (<h1>{ctxString}</h1>)
                    }
                }
            </MyContext.Consumer>
            <h4>{ctxString}</h4>
        </div>
    );
}


export default Component2