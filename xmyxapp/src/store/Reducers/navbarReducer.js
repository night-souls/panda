const navbarReducer = (prevstate = true, action) => {
    let {type, payload} = action;
    switch (type) {
    case "HideNavbar":
        return payload


    case "ShowNavbar":
        return payload

    default:
        return prevstate
    }
}
export default navbarReducer;