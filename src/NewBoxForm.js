import React, { useState } from "react"

const NewBoxForm = ({addBox}) => {
    const InitialState = { Width: "", Height: "", BackgroundColor: "" }

    const [FormData, setFormData] = useState(InitialState)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(FormData => ({...FormData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addBox({...FormData});
        setFormData(InitialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width" >Box width: </label>
            <input
                type="text"
                name="Width"
                id="width"
                placeholder="Box width(px)"
                onChange={handleChange}
                value={FormData.Width}
            />
            <label htmlFor="height">Box Height: </label>
            <input
                type="text"
                name="Height"
                id="height"
                placeholder="Box height(px)"
                onChange={handleChange}
                value={FormData.Height}
            />
            <label htmlFor="backgroundColor">Box Background Color:</label>
            <input
                type="text"
                name="BackgroundColor"
                id="backgroundColor"
                placeholder="Box backgroundColor"
                onChange={handleChange}
                value={FormData.BackgroundColor}
            />
            <button type="submit">Add Box</button>
        </form>
    )
}

export default NewBoxForm;