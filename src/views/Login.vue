<template>
	<div class="login-container">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<h3 class="title">虾大大后台管理系统</h3>
			<el-form-item prop="username">
				<el-input prefix-icon="el-icon-s-custom" v-model="ruleForm.username" type="text"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" show-password></el-input>
			</el-form-item>
			<el-form-item prop="code">
				<el-input style="width:63%" v-model="ruleForm.code" type="text">
					<svg-icon slot="prefix" iconClass='anquan' className='icon'></svg-icon>
				</el-input>
				<div class="login-code">
					<img :src="codeUrl" @click="getCode" />
				</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="height: 100%;width: 100%;" @click="loginCheck('ruleForm')">登录</el-button>
			</el-form-item>

		</el-form>
	</div>

</template>

<script>
	// @ is an alias to /src
	import {
		login,
		getCodeImg
	} from '../api/service.js'
	export default {
		data() {
			return {
				codeUrl: "",
				ruleForm: {
					username: '',
					password: '',
					code: '',
					uuid:''
				},

				rules: {
					username: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}, {
						min: 4,
						max: 20,
						message: '长度在 8 到 20个字符',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}, {
						min: 6,
						max: 20,
						message: '长度在 8 到 20个字符',
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}, {
						min: 4,
						max: 4,
						message: '长度为4',
						trigger: 'blur'
					}]
				}
			}

		},
		created() {
			this.getCode();
		},
		methods: {
			loginCheck(formName) {
				// this.$refs[formName].validate((valid) => {
				// 			if (valid) {
				// 				alert('submit!');
				// 			} else {
				// 				console.log('error submit!!');
				// 				return false;
				// 			}
				// 		}
				this.$refs[formName].validate((valid) =>{
					if(valid){
						const params = this.ruleForm;
						login(params).then(res =>{
							console.log(res)
							if(res.code==200){
								this.$router.push('/Home')
								
								}
						});
						
					}else{
						console.log('error submit!!');
						return false;
					}
				})
				
			},
			getCode() {
				getCodeImg().then(res => {
					this.codeUrl = "data:image/gif;base64," + res.img;
					this.ruleForm.uuid=res.uuid;
					// this.loginForm.uuid = res.uuid;
					console.log(res);
					console.log(this.ruleForm.uuid);
					console.log(this.codeUrl);
				});
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
		background-image: url(../assets/image/login-background.jpg);
		background-size: cover;
	}

	.title {
		text-align: center;
		font-size: 30px;
		color: white;
	}

	.icon {
		width: 200px;
		height: 200px;
		color: red;
	}
</style>
<style ref="stylesheet/scss" lang="scss">
	$input_weight:520px;

	.login-container {
		.el-form-item {}

		.el-form {
			position: absolute;
			left: 0;
			right: 0;
			width: $input_weight;
			margin: 200px auto;

		}
	}

	.login-code {
		width: 33%;
		height: 38px;
		float: right;

		img {
			cursor: pointer;
			vertical-align: middle;
		}
	}
</style>
