import AddItems from "./addItems/addItems";
import ListName from "./descriptionShopingList/description";
import InputDone from "./inputDone/inputDone";
import style from "./mainScreen.module.css";



const MainScreen = (props) => {
    
    
    return (
        <div className={style.mainScreen}>
            <ListName />
            <div className="mainScreen_items">
                <AddItems />
                <InputDone />
                    
            </div>
        </div>
    )
}

export default MainScreen;