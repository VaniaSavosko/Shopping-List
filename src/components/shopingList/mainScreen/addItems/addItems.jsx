import style from "./addItems.module.css"

const AddItems = () => {
    return (
        <div className={style.input}>
            <div className={style.input_text}>
                <input type="text" placeholder="Add item" className={style.add_item}></input>
            </div>
            <div>
                <input type="number" min={1} placeholder="0" className={style.number}></input>
                <select>
                    <option>кг</option>
                    <option>шт</option>
                </select>
            </div>
        </div>
    )
}

export default AddItems;