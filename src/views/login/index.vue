<template>
    <div class="login">
        <!-- 头部导航 -->
        <van-nav-bar title="登录" />
        <!-- 输入框 -->
        <van-cell-group>
            <van-field v-model="mobile" required clearable label="手机号码" placeholder="请输入用户名" />
            <van-field v-model="code" type="text" label="验证码" placeholder="请输入密码" required />
        </van-cell-group>
        <!-- 登录按钮 -->
        <div class="mybtn">
            <van-button type="info" size="large">登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile: '188888888', // 电话号码
            code: '246810' // 验证码：必须是 246810
        }
    }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #1989fa;
    .van-nav-bar__title {
        color: #fff;
    }
}

.mybtn {
    margin: 10px;
    .van-button {
        border-radius: 5px;
    }
}

</style>
