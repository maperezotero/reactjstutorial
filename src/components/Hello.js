import React from 'react';

const Hello = () => {
    // return (
    //     <div className='hola'>
    //         <h1>Hello Miguel</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'hola', title: 'Hola'}, 
        React.createElement('h1', null, 'Hello Miguel')
    );

}

export default Hello;