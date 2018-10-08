import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Form, } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DefaultList from './DefaultList';
import IosList from './IosList';
@connect(({ profile, loading }) => ({
    profile,
    loading: loading.effects['profile/fetchBasic'],
}))
@Form.create()
class BasicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operationkey: 'defaultList',
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
        const { operationkey } = this.state;
        const tabList = [
            {
                key: 'defaultList',
                tab: '账单核对',
            },
            {
                key: 'iosList',
                tab: 'iOS账单核对',
            },
        ];
        const contentList = {
            defaultList: (
                <DefaultList />
            ),
            iosList: (
                <IosList />
            ),
        };
        return (
            <PageHeaderWrapper
                title="账单核对"
                tabList={tabList}
                onTabChange={this.onOperationTabChange}
            >
                {contentList[operationkey]}
            </PageHeaderWrapper>
        );
    }
}

export default BasicProfile;
