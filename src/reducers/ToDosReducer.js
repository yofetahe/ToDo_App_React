
export const ToDosReducer = (state, action)=>{
    switch (action.type) {
        case 'GET_TODOS':
            console.log("in reducer >>>> ", action.toDoList)            
            return {...state, toDoList: action.toDoList}      
        case 'ADD_TODOS':
            return [...state]   
        default:
            return state;
    }
}