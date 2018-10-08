import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Card, Divider, Select, Form, Input, Button } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
// import styles from './OrderDetails.less';

const { Description } = DescriptionList;
const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;
@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
@Form.create()
class BasicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationkey: 'detail',
      formLayout: 'horizontal',
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchBasic',
    });
  }
  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values)
      }
    });
  }
  render() {
    // const { profile, loading } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { operationkey } = this.state;
    const tabList = [
      {
        key: 'detail',
        tab: '详情',
      },
      {
        key: 'edit',
        tab: '编辑',
      },
    ];
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 3 },
      wrapperCol: { span: 8 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 8, offset: 3 },
    } : null;
    const contentList = {
      detail: (
        <Fragment>
          <DescriptionList size="large" title="订单信息" style={{ marginBottom: 32 }}>
            <Description term="创建日期">1000000000</Description>
            <Description term="完成日期">已取货</Description>
            <Description term="订单号">1234123421</Description>
            <Description term="第三方ID">3214321432</Description>
            <Description term="订单状态">3214321432</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="付款信息" style={{ marginBottom: 32 }}>
            <Description term="支付方式">1000000000</Description>
            <Description term="支付端">已取货</Description>
            <Description term="销售金额">1234123421</Description>
            <Description term="钻">3214321432</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="用户信息" style={{ marginBottom: 32 }}>
            <Description term="账号">付小小</Description>
            <Description term="昵称">18100000000</Description>
            <Description term="操作系统">菜鸟仓储</Description>
            <Description term="ID">浙江省杭州市西湖区万塘路18号</Description>
            <Description term="IP">无</Description>
            <Description term="备注">无</Description>
          </DescriptionList>
        </Fragment>
      ),
      edit: (
        <Fragment>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="订单状态">
              {getFieldDecorator('goal')(
                <Select placeholder="test@example.com" >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="备注">
              {getFieldDecorator('goal')(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder="请输入你的备注"
                  rows={4}
                />
              )}
            </FormItem>
            <FormItem {...buttonItemLayout}>
              <Button type="primary">保存</Button>
            </FormItem>
          </Form>
        </Fragment>
      ),
    };
    return (
      <PageHeaderWrapper
        title="订单详情页"
        tabList={tabList}
        onTabChange={this.onOperationTabChange}
      >
        <Card bordered={false}>
          {contentList[operationkey]}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicProfile;
