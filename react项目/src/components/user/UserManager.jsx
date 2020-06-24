import React, { Component } from "react"
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import {getAllUser} from "../../api/userApi"
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
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 100,
            },
            {
                title: '真实姓名',
                dataIndex: 'reallyName',
                width: 100,
            },
            {
                title: '身份证号',
                dataIndex: 'idcard',
                width: 200,
            },
            {
                title: '出生日期',
                dataIndex: 'birthday',
                width: 100,
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                width: 200,
            },
            {
                title: '操作',
                key: 'action',
                width: 100,
                render: () => <a>编辑</a>,
            },
        ],
        data : [
            
        ]
    };
    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    componentDidMount(){
        let data1 = { pageNum:1,pageSize:5 }
        getAllUser(data1).then((data)=>{
            if(data.message == "success"){
                console.log(data.data)
                let columns1 = this.state.columns
                this.setState({columns:columns1,data:data.data})
            }
        })
    }
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
    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        return (
            // 指定唯一主键rowKey={record => record.id}这个.id就是数据库中的主键
            <Table rowKey={record => record.id} bordered components={this.components} columns={columns} dataSource={this.state.data} />
        )
    }
}

