<template>
	<div class="login-container">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<h3 class="title">Randy</h3>
			<el-form-item prop="username">
				<el-input prefix-icon="el-icon-s-custom" v-model="ruleForm.username" type="text" ></el-input>
			</el-form-item>
			<el-form-item>
				<el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" show-password></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="height: 100%;width: 100%;" @click="loginCheck()">登录</el-button>
			</el-form-item>

		</el-form>
	</div>

</template>

<script>
	// @ is an alias to /src
	import {
		login1
	} from '../api/service.js'

	export default {
		data() {
			return {
				ruleForm: {
					username: '',
					password:''
				},

				rules: {
					username: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}, {
						min: 8,
						max: 20,
						message: '长度在 8 到 20个字符',
						trigger: 'blur'
					}]
				}
			}

		},
		methods: {
			loginCheck(){
				const params=this.ruleForm;
				login1(params);
			}
			
			}
	}
</script>
<style ref="stylesheet/scss" lang="scss">
	$bg:#33334c;
	.login-container {
		height: 100%;
		width: 100%;
		background-color: $bg;

	}

	.title {
		text-align: center;
		font-size: 30px;
		color: white;
	}
</style>
<style ref="stylesheet/scss" lang="scss">
	$input_weight:520px;

	.login-container {
		.el-form-item {

		}

		.el-form {
			position: absolute;
			left: 0;
			right: 0;
			width: $input_weight;
			margin: 200px auto;

		}
	}
</style>
