<template>
	<div class="login-container">
		<el-form>
			<h3 class="title">Randy</h3>
			<el-form-item>
				<el-input prefix-icon="el-icon-s-custom" v-model="loginData.username" type="text"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input prefix-icon="el-icon-lock" v-model="loginData.password" show-password></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="height: 100%;width: 100%;" @click='loginCheck'>登录</el-button>
			</el-form-item>

		</el-form>
	</div>

</template>

<script>
	// @ is an alias to /src
import {login} from '../api/service.js'

	export default {
		data(){
			return {
				loginData:{
					username:'',
					password:''					
				}
			}
		
		},
		methods:{
			loginCheck(){
				console.log(this.loginData);
				login(this.loginData.username,this.loginData.password);
			}
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss">
	$bg:#33334c;
	$light_gray:#eee;

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
			border: 1px solid rgba(179, 179, 179, 25);
			background: rgba(0, 33, 49, 25);
			border-radius: 5px;
			color: #3f3f5e;
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
