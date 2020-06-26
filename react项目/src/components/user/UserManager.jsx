import React, { Component } from "react"
import { Table, Card, Button } from 'antd';
import { Resizable } from 'react-resizable';
import { getAllUser } from "../../api/userApi"
import { size } from "store2";
const ResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

export default class UserManager extends Component {
    state = {
        columns: [
            {
                title: '用户名',
                dataIndex: 'username',
                width: 100,
                ellipsis: true
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
            },
            {
                title: '真实姓名',
                dataIndex: 'reallyName',
                width: 100,
                ellipsis: true
            },
            {
                title: '身份证号',
                dataIndex: 'idcard',
                width: 180,
            },
            {
                title: '住址',
                dataIndex: 'address',
                width: 180,
            },
            {
                title: '出生日期',
                dataIndex: 'birthday',
                width: 120,
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                width: 120,
            },
            {
                title: '操作',
                key: 'action',
                // width: 140,
                render: () => (
                    <span>
                        <Button type="primary" size="small">编辑</Button>
                        <Button type="primary" size="small" danger>删除</Button>
                    </span>
                ),
            },
        ],
        data: [
        ],
        pagination: {
            current: 1,
            pageSize: 3,
            total: 200,
            pageSizeOptions: ['3', '5', '10','20'],
            defaultCurrent: 1,
            showSizeChanger:true,
            // 修改样式
            size:"small",
        },
        loading:false
    };
    components = {
        header: {
            cell: ResizeableTitle,
        },
    };
    // 改变分页获取数据
    handleTableChange = (pagination) => {
        let { current, pageSize } = pagination
        let data1 = { pageNum: current, pageSize: pageSize }
        this.setState({ loading: true });
        getAllUser(data1).then((data) => {
            if (data.message == "success") {
                this.setState({ data: data.data })
                // console.log(Object.assign(pagination, { total: data.code, current: current, defaultCurrent: current }))
                this.setState({
                    pagination: Object.assign
                        (pagination, { total: data.code, current: current, defaultCurrent: current })
                })
                this.setState({ loading: false });
            }
        })
    };
    // 初始化数据
    thisInitData() {
        let { current, pageSize } = this.state.pagination
        let data1 = { pageNum: current, pageSize: pageSize }
        this.setState({ loading: true });
        getAllUser(data1).then((data) => {
            if (data.message == "success") {
                // console.log(data)
                this.setState({ data: data.data })
                this.setState(Object.assign(this.state.pagination, { total: data.code, current: current }))
                this.setState({ loading: false });
            }
        })
    };
    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };

    componentDidMount() {
        this.thisInitData();
    }

    render() {
        const { data, pagination, loading } = this.state;
        // console.log({ ...pagination })
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        return (
            // 指定唯一主键rowKey={record => record.id}这个.id就是数据库中的主键
            <div>
                <Card type="inner" title="用户管理" extra={<a href="#">操作</a>}>
                    <Table
                        rowKey={record => record.id}
                        bordered components={this.components}
                        columns={columns}
                        dataSource={data}
                        pagination={{ ...pagination }}
                        loading={loading}
                        onChange={this.handleTableChange}
                    />
                </Card>
            </div>
        )
    }
}

