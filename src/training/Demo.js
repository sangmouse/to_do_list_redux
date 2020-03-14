// đầu tiên tạo ra cái Store, để quản lý tất cả các State của app
import {createStore} from 'redux'
import {status, sort} from './actions/index'
import myReducer from './reducers/index'


// 5: khởi tạo store, truyền reducer vào store
const store  = createStore(myReducer)

// console.log('DEFAULT: ' + store.getState())
// thực hiện công việc thay đổi status (action)
// var action = {
//     type:'TOGGLE_STATUS',
// }

// dùng hàm dispatch của store để truyền vào action đưa đến reducer
store.dispatch(status())

console.log('TOGGLE_STATUS: ' + store.getState().status)

// 2: khởi tạo action, thực hiện công việc sắp xếp: Sort name from Z-A
// var sortAction = {
//     type:'SORT',
//     sort:{
//         by:'name',
//         value:-1
//     }
// }
// 3: nhận dùng action sử dụng hàm dispatch
store.dispatch(sort({
    by:'name',
    value:-1
}))

// 6: show ra store
console.log('SORT: ' + store.getState().sort.value)