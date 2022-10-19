import style from "./sideMenu.module.css"


const SideMenu = () => {
    return (
        <div className={style.sideMenu}>
            <div className={style.user}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className={style.btn}>
                <button className="newList">+ New List</button>
            </div>
            <div className={style.lists}>
                <span>List 1</span>
                <span>List 2</span>
                <span>List 3</span>
            </div>
        </div>
    )
}

export default SideMenu;