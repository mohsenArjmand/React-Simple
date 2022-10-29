const initialState = {
    isLoading: false,
    items: [],
    treeData: [],
    tableData:[]
}

export const reducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'TREE_DATA': return { ...state, treeData: action.payload }
        case 'TABLE_DATA': return { ...state, tableData: action.payload }
        //case 'DEC': return store - payload
        default: return state // { ...state, person: action.payload }

    }
}