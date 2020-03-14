// 1: khởi tạo state  ban đầu
var initialState = {
    by:'name',
    value:1
    
}

// 4: tạo ra reducer để nhận vào action, state
var myReducer = (state = initialState, action) =>{
    if(action.type === 'SORT'){
        var {by, value} = action.sort

        return {by, value}
    }
    return state
}
export default myReducer