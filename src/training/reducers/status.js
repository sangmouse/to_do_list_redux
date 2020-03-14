// 1: khởi tạo state  ban đầu
var initialState = false

// 4: tạo ra reducer để nhận vào action, state
var myReducer = (state = initialState, action) =>{
    if(action.type === 'TOGGLE_STATUS'){
        state = !state
        return state
    }
    return state
}
export default myReducer