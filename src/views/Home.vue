<template>

	<el-container>
		<el-header>耗材管理</el-header>
		<el-container>
			<el-aside width="200px">
				<el-row class="tac">
					<el-col :span="24">
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>库存</span>
								</template>
								<router-link to="/test">
									<!-- 									<el-menu-item index="/test" @click="goTo('/test')">
 -->
									<el-menu-item index="1">
										<span slot="title">库存查询</span>
									</el-menu-item>
								</router-link>
								<router-link to="/test1">
									<el-menu-item index="2">
										<span slot="title">入库新增</span>
									</el-menu-item>
								</router-link>

								<!-- 								<el-submenu index="1-1">
									<template slot="title">库存查询</template>
									<el-menu-item index="1-1-1">入库新增</el-menu-item>
									<el-menu-item index="1-1-2">选项2</el-menu-item>
									<el-menu-item index="1-1-3">选项3</el-menu-item>									
								</el-submenu>
								<el-submenu index="1-2">
									<template slot="title">选项2</template>
									<el-menu-item index="1-2-1">选项1</el-menu-item>
									<el-menu-item index="1-2-2">选项2</el-menu-item>
									<el-menu-item index="1-2-3">选项3</el-menu-item>									
								</el-submenu> -->
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航二</span>
								</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			goTo(path) {
				this.$router.replace(path);
			}
		}
	}
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 20px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 50px;
	}

	a {
		text-decoration: none;
	}

	.router-link-active {
		text-decoration: none;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 757px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
