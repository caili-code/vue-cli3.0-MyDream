<template>
	<div>
		<el-row>
			<el-col :span="9">
				<div class="grid-content bg-purple-dark">
					<el-form :inline="true" :model="formInline" class="demo-form-inline">
						<el-form-item label="品牌">
							<el-select v-model="formInline.region" placeholder="活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="型号">
							<el-select v-model="formInline.region" placeholder="活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24" :offset="0">
				<div class="grid-content bg-purple-dark">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="date" label="品牌" width="180">
						</el-table-column>
						<el-table-column prop="name" label="型号" width="180">
						</el-table-column>
						<el-table-column prop="address" label="数量">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		},
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #ffffff;
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

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
