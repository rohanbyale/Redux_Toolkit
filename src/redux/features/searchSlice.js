import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
name:"search",
initialState:{
    query:'',
    activeTab:'photos',
    results:[],
    loading:false,
    errror:null
},

reducers:{
    setQuery(state,action){
state.query= action.payload
    },

    setActiveTabs(state,action){
state.activeTab=action.payload
    },

      setResults(state,action){
        state.results=action.payload
state.loading=false

    },
    setLoading(state,action){
state.loading= true
state.errror=null
    },
  
    setError(state,action){
state.errror=action.payload
state.loading=false
    },
    clearResults(state){
        state.results=[]
    }
}

})

export const {setQuery,setActiveTabs,setResults,setLoading,setError}= searchSlice.actions
export default searchSlice.reducer