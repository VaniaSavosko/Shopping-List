import MainScreen from "./mainScreen/mainScreen";
import SideMenuContainer from "./sideMenu/SideMenuContainer";
import style from "./ShopingList.module.css"



const ShopingList = () => {
    return (
        <main className={style.container}>
            <article>
                <MainScreen />
            </article>
            <aside>
                <SideMenuContainer />
            </aside>
        </main>
    )
}

export default ShopingList;