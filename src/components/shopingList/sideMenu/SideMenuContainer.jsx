import { connect } from "react-redux"
import SideMenu from "./sideMenu"


let mapStateToProps = (state) => {
    return {
        sideMenu: state.sideMenu
    }
}

const SideMenuContainer = connect(mapStateToProps)(SideMenu);

export default SideMenuContainer;