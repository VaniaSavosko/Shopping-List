import MainScreen from "./mainScreen/mainScreen";
import SideMenu from "./sideMenu/sideMenu";
import style from "./ShopingList.module.css"



const ShopingList = () => {
    return (
        <div className={style.container}>
            <MainScreen />
            <SideMenu />
        </div>
    )
}

export default ShopingList;