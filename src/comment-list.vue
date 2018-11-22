<template>
	<div class='cinput'>
			<comment v-for='c in comments' 
			v-bind:comment='c' 
			:key='c.id' @shanchuwo="doDelete"></comment>
		</div>
</template>

<script>
import commentItem from './comment-item.vue';
export default {
	props: ['comments'],
	methods: {
		doDelete(id) {
			this.$emit('shanchuwo', id);
		}
	},
	components:{
		comment:commentItem
	}
};
</script>