<template>
	<div>
		<div class="right">

		</div>
	</div>
</template>

<script>
// 引入axios

export default {
    data() {
		return {
			seach: '',
			select: '',
			tableData:[],
			curpage:1,
			pageSize:10,
			total:0
		}
    },
    // 映射store数据
    computed: {

    },
    methods:{
		//获取每一行的数据
		handleClick(row) {
			sessionStorage.id = row.id;
			this.$router.push('/users/userDetails/details')
		},
		//每页显示条数改变触发
		handleSizeChange(pageSize){
			this.pageSize = pageSize;
			this.getList();
		},
		//按回车键触发搜索
		enter(){
			if(event.keyCode==13){
			this.getList()
			}
		},
		//下拉选中触发搜索
		handSelect(){
			this.getList()
		},
		//当前页改变触发
		handleCurrentChange(curpage){
			this.curpage=curpage;
			this.getList();
		},
		//编辑
		handleEditor(row){
			sessionStorage.id = row.id;
			this.$router.push('/users/userDetails/editor');
			console.log(row);
		},
		//停用事件
		disable(row){
			axios.get(HOSTNAME+'/api/AdminUser/openUser',{
					params:{user_id:row.id}
			})
			row.user_status = 1
		},
		//启用事件
		enable(row){
			axios.get(HOSTNAME+'/api/AdminUser/banUser',{
					params:{user_id:row.id}
			})
			row.user_status = 0
		},
		//新增用户
		newUsers(){
			this.$router.push('/users/addUsers')
		},
		//搜索查询
		query(){
			this.getList()
		},
		async getList(){
			// await axios.post(HOSTNAME+'/Api/AdminUser/userList',{
			// 	page:this.curpage,
			// 	rows:this.pageSize,
			// 	//手机号查询
			// 	user_info:this.seach,
			// 	//验证是否查询
			// 	identified:this.select
			// }).then((res) => {
			// 	this.login_check(res.data.code);
			// 	this.tableData = res.data.data.data
			// 	this.curpage = res.data.data.current_page
			// 	this.pageSize = res.data.data.per_page
			// 	this.total = res.data.data.total
			// });

		},
		//formatter 格式化内容第三个参数cellValue是数据的返回值
		format(row, column, cellValue){
			if(cellValue===0){
			return "否"
			}else{
			return "是"
			}
		}
	},
		//生命周期钩子函数，进入页面显示之前获取数据到store
	created() {
		//分页查询
		this.getList();
		sessionStorage.tab_index = '';
	}
}
</script>

<style scoped>
.right{
	background-color: rebeccapurple;
	min-height: 100vh;
}
</style>
