import React, { Component } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';

const { UserName, Password, Captcha, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  componentDidMount() {
    this.onGetCaptcha()
  }
  onGetCaptcha = () =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'login/getCaptcha'
    });
  }

  handleSubmit = (err, values) => {
    // const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          // type,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          {/* <Tab key="account" tab="账户密码登录"> */}
          {login.status === 'error' &&
            login.type === 'account' &&
            !submitting &&
            this.renderMessage('账户或密码或验证码错误')}
          <UserName name="username" placeholder="请输入账号" />
          <Password
            name="password"
            placeholder="请输入密码"
            onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
          />
          <Captcha name="code" onGetCaptcha={this.onGetCaptcha} captchaNum={login.captchaNum} captchaUrl={login.captchaUrl} />
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
