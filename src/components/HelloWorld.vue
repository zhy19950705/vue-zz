<template>
  <div class="hello">
    <div class="app-container">
      <el-table :data="list"  border fit highlight-current-row>
        <el-table-column align="center" label='ID' width="95">
          <template slot-scope="scope">
            {{scope.$index}}
          </template>
        </el-table-column>
        <el-table-column label="Title">
          <template slot-scope="scope">
            {{scope.row.title}}
          </template>
        </el-table-column>
        <el-table-column label="Author" width="110" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.author}}</span>
          </template>
        </el-table-column>
        <el-table-column label="Pageviews" width="110" align="center">
          <template slot-scope="scope">
            {{scope.row.pageviews}}
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="Status" width="110" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status ">{{scope.row.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="created_at" label="Display_time" width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{scope.row.display_time}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/transaction'

export default {

  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: null
    }
  },
  methods: {
    async fetchData() {
      try {
        await getList().then(res => {
          this.list = res.data.items
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
