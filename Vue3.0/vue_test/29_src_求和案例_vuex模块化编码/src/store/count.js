/*求和功能相关的配置*/
export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            console.log('actions中的jiaOdd被调用了')
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('actions中的jiaWait被调用了')
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA: function (state, value) {
            console.log('mutations中的JIA被调用了')
            state.sum = state.sum + value
        },

        JIAN: function (state, value) {
            console.log('mutations中的JIA被调用了')
            state.sum = state.sum - value
        },
    },
    state: {
        /*当前的和*/
        sum: 0,
        school: "尚硅谷",
        subject: "前端",
    },
    getters: {
        bigSum: function (state) {
            return state.sum * 10
        }
    }
}
