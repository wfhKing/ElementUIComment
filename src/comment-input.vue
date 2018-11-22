<template>
	<div>
		<el-form label-width="80px">
		  <el-form-item label="用户名称">
			<el-input v-model='author'></el-input>
		  </el-form-item>
		  <el-form-item label="内容">
			<el-input type="textarea" style="width:300px"  v-model='content'></el-input>
		  </el-form-item>
		  <el-form-item>
			<el-button type="primary" @click='doSave'>发布</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
var commentInput = {
    data() { return {
        author: '',
        content: ''
    }},
    methods: {
        doSave() {
            if (!this.author) {
                return alert('用户名不能为空');
            }
            if (!this.content) {
                return alert('内容不能为空');
            }

            // 更新保存在 localStorage 里的作者名
            localStorage.setItem('vvv-authorname', this.author);

            // 发射、广播出去
            this.$emit('woyaobaocun', {
                id: +new Date(),
                author: this.author,
                content: this.content
            });

            // clear
            this.content = '';
        }
    },
    created() {
        const authorname = localStorage.getItem('vvv-authorname');
        if (authorname) {
            this.author = authorname;
        }
    }
};

export default commentInput;
</script>

<style>
	.el-input{
		width:300px;
	}
	#root {
		width: 400px;
		padding: 2em;
		margin: 2em auto;
		border: 1px solid #e0e0e0;
		border-radius: 1em;
	}
</style>