import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuidv4() }])
    }
    const removeBox = (idx) => {
        setBoxes(boxes => boxes.filter((box, index) => idx !== index))
    }


    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ Width, Height, BackgroundColor, id }, idx) =>
                    <Box Width={Width}
                        Height={Height}
                        BackgroundColor={BackgroundColor}
                        removeBox={removeBox}
                        key={id}
                        idx={idx}
                    />
                )}
            </div>
        </div>
    )

}

export default BoxList;
