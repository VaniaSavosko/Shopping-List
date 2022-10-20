import MainScreen from "./mainScreen/mainScreen";
import SideMenu from "./sideMenu/sideMenu";
import style from "./ShopingList.module.css"



const ShopingList = () => {
    return (
        <main className={style.container}>
            <article>
                <MainScreen />
            </article>
            <aside>
                <SideMenu />
            </aside>
        </main>
    )
}

export default ShopingList;