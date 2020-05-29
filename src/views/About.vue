<template>
  <div>
    <div>
      <v-btn text large color="primary" @click="addStar">Add Star</v-btn>
      <v-btn text large color="primary" @click="save">Save</v-btn>
      <v-btn text large color="primary" @click="load">Load</v-btn>
    </div>
    <v-stage
      ref="stage"
      :config="configKonva"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
    >
      <v-layer ref="layer">
        <v-group>
          <v-circle
            v-for="item in list"
            :key="item.id"
            :config="{
            x: item.x,
            y: item.y,
            id: item.id,
            radius: 50,
            fill: 'blue',
            stroke: 'black',
            strokeWidth: 1,
            draggable: true
          }"
          ></v-circle>
          <v-text
            v-for="item in list"
            :key="item.id"
            :config="{
            text:item.text,
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#000',
            width: 130,
            padding: 5,
            align: 'center'
          }"
          ></v-text>
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
const width = window.innerWidth
const height = window.innerHeight
export default {
  data () {
    return {
      configKonva: {
        width: width,
        height: height
      },
      list: [],
      dragItemId: null
    }
  },
  mounted () {},
  computed: {},
  methods: {
    handleDragstart (e) {
      // save drag element:
      // this.dragItemId = e.target.id()
    },
    handleDragend (e) {
      this.dragItemId = e.target.id()
      let item = this.list.find(i => i.id === this.dragItemId)
      let index = this.list.indexOf(item)
      this.list.splice(index, 1)
      item.x = e.target._lastPos.x
      item.y = e.target._lastPos.y
      this.list.push(item)
    },
    save () {
      localStorage.setItem('storage', JSON.stringify(this.list))
    },
    load () {
      const data = localStorage.getItem('storage') || '[]'
      this.list = JSON.parse(data)
    },
    addStar () {
      this.list.push({
        id: this.list.length,
        x: 0,
        y: 0,
        text: this.list.length + 1
      })
    }
  }
}
</script>
