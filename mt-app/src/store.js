import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    position:{
        
    },
    nearCity:{
        
    },
    userName:''
}

const mutations = {
    setPosition(state,val){
        // console.log(val)
        state.position = val
        state.nearCity = val
    },
    setUserName(state,val){
        state.userName = val;
    }
}

const actions = {
    setPosition({commit},val){
        // console.log(val)
        if(typeof(val) == 'string'){
            commit('setPosition',val)
        }else{
            const val2 = val;
            val2.name="杭州"
            commit('setPosition',val2)
        }
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})