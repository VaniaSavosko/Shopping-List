import { useState } from 'react'
import style from "./addItems.module.css"

const AddItems = (props) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (action) => {
        setUserInput(action.currentTarget.value)
    }
    const handleSubmit = (action) => {
        action.preventDefault()
        props.addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (action) => {
        if (action.key === "Enter") {
            handleSubmit(action)        
        }
    }
    return (
        <form onSubmit={handleSubmit} className={style.input}>
            <div className={style.input_text}>
                <input value={userInput} type="text" onChange={handleChange} onKeyDown={handleKeyPress} placeholder="Add item" className={style.add_item}></input>
            </div>
            <div>
                <input type="number" min={1} placeholder="0" className={style.number}></input>
                <select>
                    <option>кг</option>
                    <option>шт</option>
                </select>
            </div>
        </form>
    )
}

export default AddItems;