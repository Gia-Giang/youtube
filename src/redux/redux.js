const isShow = false
const rootRedux = (state, action = isShow) => {
    switch (action.type) {
        case "ISSHOW":
            return {
                state: state,
                action: action.user
            }

        default:
            return {
                state: state,
                action: isShow
            }
    }
}
export default rootRedux