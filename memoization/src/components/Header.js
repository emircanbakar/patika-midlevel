import React from 'react'

function Header({number,  increment}) {
    console.log("header component Re-rendered")
    return (
        <div>
            <h2>header {number} </h2>
            {/* <code> {JSON.stringify(data)} </code> */}
            <button onClick={increment}>Click</button>
        </div>
    )
}
//react memo ile gelen proplar karşılaştırılır eğer aynı ise gelen prop değerleri component render edilmez.
export default React.memo(Header)
