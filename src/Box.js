import React from "react"
import "./Box.css"

const Box = ({ Width, Height, BackgroundColor, removeBox, idx }) => {

    return (
        <div className="container">
            <div className="box-details">
                <h3>Box Details</h3>
                <ul>
                    <li>Height: {Height}px</li>
                    <li>Width: {Width}px</li>
                    <li>Background Color: <span style={{ color: BackgroundColor }}>{BackgroundColor}</span></li>
                </ul>
            </div>
            <div className="box-wrapper">

                <div className="Box"
                    style={{
                        width: `${Width}px`,
                        height: `${Height}px`,
                        backgroundColor: `${BackgroundColor}`
                    }}>
                </div>
                <div className="remove-btn">
                    <button onClick={() => removeBox(idx)}>X</button>
                </div>
            </div>
        </div>
    )

}
export default Box;