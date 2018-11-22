<template>
	<div class='comment'>
		<hr>
		<el-form label-width="80px">
		  <el-form-item :label="comment.author">
			<el-input type="textarea" style="width:300px" v-model="comment.content"></el-input>
		  </el-form-item>
		  
		  <el-form-item>
			<el-button type="primary" @click='deleteMe'>删除</el-button>
		  </el-form-item>
		  
		</el-form>
   </div>
</template>

<script>
export default {
    props: ['comment'],
    methods: {
        deleteMe() {
            this.$emit('shanchuwo', this.comment.id);
        }
    }
};
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
	line-height: 2.1em;
	text-align :center;
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>