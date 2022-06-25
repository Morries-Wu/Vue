/*该文件用于创建vuex中最为核心的store*/

/*引入Vuex*/
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
/*准备actions,用于响应组件中的动作*/
const actions = {
    jia: function (context, value) {
        console.log('actions中的jia被调用了')
        context.commit('JIA', value)
    },
    jian: function (context, value) {
        console.log('actions中的jia被调用了')
        context.commit('JIAN', value)
    },
    jiaOdd: function (context, value) {
        console.log('actions中的jiaOdd被调用了')
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait: function (context, value) {
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500)
    }

}

/*准备mutations,用于操作数据*/
const mutations = {
    JIA: function (state, value) {
        console.log('mutations中的JIA被调用了')
        state.sum = state.sum + value
    },
    JIAN: function (state, value) {
        console.log('mutations中的JIA被调用了')
        state.sum = state.sum - value
    },
}

/*准备state,用于存储数据*/
const state = {
    /*当前的和*/
    sum: 0,
    school:"尚硅谷",
    subject:"前端"
}

/*准备getters,用于将state中的数据进行加工*/
const getters={
    bigSum:function (state){
        return state.sum*10
    }
}


/*创建store,并导出store*/
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

