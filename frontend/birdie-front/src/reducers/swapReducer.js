
const swapReducer = (sorter = 'time', action) => {
    if (action.type === 'SWAP') {
        sorter = action.data
    }
    return sorter
}

export default swapReducer