/*该文件用于创建vuex中最为核心的store*/

/*引入Vuex*/
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

/*创建store,并导出store*/
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})

