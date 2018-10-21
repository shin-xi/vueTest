<template>
    <div>
        <div>mapVuex</div>
        <div>{{countArrow}}</div>
        <div>{{countAlias}}</div>
        <div>{{countPlusLocalState}}</div>
        <div>{{count}}</div>

        <br>
        <template v-for="(item,index) of doneTodos">
            <div :key="index">{{item.id}}</div>
        </template>
        <div>{{doneTodosCount}}</div>
        <div>{{getTodoById}}</div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'mapVuex',
  data () {
    return {
      localCount: 1,
      id: 3
    }
  },
  computed: {
    ...mapState({
      countArrow: state => state.count,
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapState(['count']),
    ...mapState({ // 模块中的stage
      name: state => state.moduleDemo.name,
      nameAlias (state) {
        return state.moduleDemo.name
      }
    }),
    ...mapGetters(['doneTodos']),
    ...mapGetters({
      doneTodosCount: 'doneTodosCount'
    }),
    getTodoById () { // 使用方法返回不能使用mapGetter
      return this.$store.getters.getTodoById(this.id)
    }
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    ...mapActions({
      add3: 'incrementAsync' // 将 `this.add1()` 映射为 `this.$store.dispatch('increment')`
    }),
    ...mapActions({
      demo: 'moduleDemo/demo'
    })
  },
  mounted () {
    // mutation
    this.$store.commit('increment', { amount: 10 })
    this.$store.commit({ type: 'increment', amount: 10 })
    this.increment()
    this.incrementBy({ amount: 10 })
    this.add()

    // action
    this.$store.dispatch('incrementAsync', 10)
    this.$store.dispatch({ type: 'incrementAsync', amount: 10 })
    this.add3()

    this.$store.dispatch('moduleDemo/demo')
    this.demo()
  }
}
</script>

<style scoped>

</style>
