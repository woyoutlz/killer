<template>
  <div id="app">
    <p><span class="people_span" v-for="people in peoples"><a v-on:click="add(people)">{{people}}</a></span></p>
    <p><span class="people_span" v-for="jiaose in jiaoses"><a v-on:click="add(jiaose)">{{jiaose}}</a></span></p>
     <p><span class="people_span" v-for="action in actions"><a v-on:click="add(action)">{{action}}</a></span></p>
     <p class="record_p"><span class="people_span" v-for="con in out_control"><a v-on:click="control(con)">{{con}}</a></span></p>
     <p class="record_p"><span class="people_span" v-for="record in records"><a>{{record}}</a></span></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  components:{
  },
  data () {
    return {
        peoples:[...Array(10).keys()].map(function(a){return a+1}),
        jiaoses:["狼","预言","女巫","民","猎人","丘比特","神"],
        actions:["觉得","查","自称","同意","质疑","投票","..."],
        records:[],
        out_control:["删除","选择","换行"]
    }
  },
  methods:{
    add:function(some){
      this.records.push(some)
    },
    control:function(name){
      if(name=="删除"){
         this.records.pop()
      }
      if(name=="换行"){
         this.records.pop()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.people_span{
  margin:20px;
  a{
    cursor:pointer;
  }
}
.record_p{
  color:red;
}
</style>