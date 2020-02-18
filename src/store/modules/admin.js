
// initial state
// 状态值
const state = {
    adminPark:[]
}

// mutations
const mutations = {
    adminParkList (state, products) {
        state.adminPark = products
    },
}

// actions
const actions = {
    getAdminParkList ({ commit }) {
        commit('adminParkList', products)
    }
    // this.$store.commit('getAdminParkList',params)
}

// getters
const getters = {

}




export default {
    state,
    getters,
    actions,
    mutations
}
