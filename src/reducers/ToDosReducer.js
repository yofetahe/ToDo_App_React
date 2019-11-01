import ApiCall from "../api/ApiCall";

export const ToDosReducer = (state, action)=>{
    switch (action.type) {
        case 'GET_TODOS':
            return [...state, {
                fetchToDoList
            }]            
        case 'ADD_TODOS':
            return [...state, {

            }]   
        default:
            return state;
    }
}

 const fetchToDoList = async() => {
    const response = await ApiCall.get("/getAllToDoList");        
    return response.data;
}