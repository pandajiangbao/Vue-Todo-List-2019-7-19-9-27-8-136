<template>
  <div class="todo-list-container">
    <p>Todo List</p>
    <div>
      <i>Simple Todo List with adding and filter by diff isSelected.</i>
    </div>
    <div class="item-list-input-container">
      <input v-model="content.value" type="text" />
      <Button @click="addItem">Add</Button>
    </div>
    <div class="item-list-container">
      <div class="item-list" v-for="(item,index) in ShowItemList" :key="index">
        <span v-if="item.isSelected==false">{{index+1}}.<span class="color-zone"><input type="checkbox" v-model="item.isSelected" />{{item.value}}</span></span>
        <del v-else>{{index+1}}.<span class="color-zone"><input type="checkbox" v-model="item.isSelected" />{{item.value}}</span></del>
      </div>
    </div>
    <div class="item-list-button-container">
      <button @click="clickType='All'">All</button>
      <button @click="clickType='Active'">Active</button>
      <button @click="clickType='Complete'">Complete</button>
    </div>
  </div>
</template>

<script>
export default {
    data() { 
        return {
            content:{value:'',isSelected:false},
            itemList:[],
            clickType:'All'
        }
    },
    computed: {
        ActiveItemList:function(){
                return this.itemList.filter(item=>item.isSelected==false)
            },
        CompleteItemList:function(){
                return this.itemList.filter(item=>item.isSelected==true)
            },
        ShowItemList:function() {
            if(this.clickType==="Active"){
                return this.ActiveItemList
            }
            else if(this.clickType==="Complete"){
                return this.CompleteItemList
            }
            else return this.itemList
        }
    },
    methods:{
        addItem(){
            if(this.content.value!=''){
                this.itemList.push(this.content)
                this.content={value:'',isSelected:false}
            }
        }
    }
 }
</script>
