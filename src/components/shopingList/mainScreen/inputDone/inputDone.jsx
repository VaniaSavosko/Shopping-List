import style from "./inputDone.module.css";

const InputDone = (props) => {
    return (
        <div key={props.state.id} className={style.inputDone}>
            <div className={style.text_desc}>
                <input type="checkbox"></input>
                <span className={props.state.complete ? style.strike : style.inputText} onClick={() => props.handleToggle(props.state.id)} >
                {props.state.task}
            </span>
            </div>
            <div className={style.right}>
                <input type="number" className={style.number}></input>
                <button onClick={ () => props.removeTask(props.state.id) }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
            </div>
        </div>
    )
}

export default InputDone;