import { createSlice } from '@reduxjs/toolkit';

//reducer
import { dispatch } from '../store';

const initialState = {
    sidebar: {
        open: false,
        type:'CONTACT', //can be CONTACT, STARRED, SHARED
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType: (state, action) => {
            state.sidebar.type = action.payload
        }
    }
})

export default slice.reducer;

//function
function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}

function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType(type))
    }
}

export {ToggleSidebar, UpdateSidebarType}
