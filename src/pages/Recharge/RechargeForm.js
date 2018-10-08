import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
    Form,
    Input,
    DatePicker,
    Select,
    Button,
    Card,
    InputNumber,
    Radio,
    Icon,
    Tooltip,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@connect(({ loading }) => ({
    submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class BasicForms extends PureComponent {
    handleSubmit = e => {
        const { dispatch, form } = this.props;
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dispatch({
                    type: 'form/submitRegularForm',
                    payload: values,
                });
            }
        });
    };

    render() {
        const { submitting } = this.props;
        const {
            form: { getFieldDecorator, getFieldValue },
        } = this.props;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 10 },
            },
        };

        const submitFormLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 10, offset: 7 },
            },
        };

        return (
            <PageHeaderWrapper
                title="冲账充值"
            >
                <Card bordered={false}>
                    <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
                        <FormItem {...formItemLayout} label="用户名">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名',
                                    },
                                ],
                            })(<Input placeholder="请输入用户名" />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="用户充值时间">
                            {getFieldDecorator('date', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择用户充值时间',
                                    },
                                ],
                            })(<DatePicker />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="运营补账时间">
                            {getFieldDecorator('goal', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入运营补账时间',
                                    },
                                ],
                            })(<DatePicker />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="充值">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入充值数',
                                    },
                                ],
                            })(<Input placeholder="请输入充值数" />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="是否首冲">
                            {getFieldDecorator('status')(
                                <Select placeholder="请选择">
                                    <Option value="0">否</Option>
                                    <Option value="1">是</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="需到账钻数">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入到账钻数',
                                    },
                                ],
                            })(<Input placeholder="请输入到账钻数" />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="第三方ID">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入第三方ID',
                                    },
                                ],
                            })(<Input placeholder="请输入第三方ID" />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="备注">
                            {getFieldDecorator('standard')(
                            <TextArea style={{ minHeight: 32 }} placeholder="请输入备注" rows={4} />
                            )}
                        </FormItem>
                        <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                            <Button type="primary" htmlType="submit" loading={submitting}>
                                提交审核
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </PageHeaderWrapper>
        );
    }
}

export default BasicForms;
