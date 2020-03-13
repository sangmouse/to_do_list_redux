// đầu tiên tạo ra cái Store, để quản lý tất cả các State của app
import {createStore} from 'redux'
// 1: khởi tạo state ban đầu
var initialState = {
    status: false,
    sort:{
        by:'name',
        value:1
    }
}
// 4: tạo ra reducer để nhận vào action, state
var myReducer = (state = initialState, action) =>{
    // if(action.type === 'TOGGLE_STATUS'){
    //     state.status = !state.status
    // }
    if(action.type === 'SORT'){
        state.sort = {
            by: action.sort.by,
            value:action.sort.value
        }
    }
    return state
}
// 5: khởi tạo store, truyền reducer vào store
const store  = createStore(myReducer)
// console.log('DEFAULT: ' + store.getState())
// thực hiện công việc thay đổi status (action)
// var action = {
//     type:'TOGGLE_STATUS'
// }

// dùng hàm dispatch của store để truyền vào action đưa đến reducer
// store.dispatch(action)

// console.log('TOGGLE_STATUS: ' + store.getState())

// 2: khởi tạo action, thực hiện công việc sắp xếp: Sort name from Z-A
var sortAction = {
    type:'SORT',
    sort:{
        by:'name',
        value:-1
    }
}
// 3: nhận dùng action sử dụng hàm dispatch
store.dispatch(sortAction)

// 6: show ra store
console.log('SORT: ' + store.getState())