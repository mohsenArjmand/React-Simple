import { CarryOutOutlined, FormOutlined } from '@ant-design/icons'; 
import React  from 'react';
import AntTree from './AntTree';
import {connect } from 'react-redux'
const treeData = [
    {
        title: 'مدیریت ',
        key: '0-0',
        icon: <CarryOutOutlined />,
        children: [
            {
                title: 'مدیریت محصولات 1-0',
                key: '0-0-0',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'لیست محصولات',
                        key: 'about',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: (
                            <>
                                <div>ایجاد محصول</div>
                                <div>جهت برنامه ریزی</div>
                            </>
                        ),
                        key: 'home',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: 'حذف محصولات',
                        key: 'login',
                        icon: <CarryOutOutlined />,
                    },
                ],
            },
            {
                title: 'مدیریت کاربران 1-1',
                key: '0-0-1',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'ثبت کاربر',
                        key: 'logoff',
                        icon: <CarryOutOutlined />,
                    },
                ],
            },
            {
                title: 'مدیریت فرم ها 1-2',
                key: '0-0-2',
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: 'ثبت فرم',
                        key: 'nopage',
                        icon: <CarryOutOutlined />,
                    },
                    {
                        title: 'لیست فرمها',
                        key: 'datafortable',
                        icon: <CarryOutOutlined />,
                        switcherIcon: <FormOutlined />,
                    },
                ],
            },
        ],
    },
    // {
    //     title: 'parent 2',
    //     key: '0-1',
    //     icon: <CarryOutOutlined />,
    //     children: [
    //         {
    //             title: 'parent 2-0',
    //             key: '0-1-0',
    //             icon: <CarryOutOutlined />,
    //             children: [
    //                 {
    //                     title: 'leaf',
    //                     key: '0-1-0-0',
    //                     icon: <CarryOutOutlined />,
    //                 },
    //                 {
    //                     title: 'leaf',
    //                     key: '0-1-0-1',
    //                     icon: <CarryOutOutlined />,
    //                 },
    //             ],
    //         },
    //     ],
    // },
];


function AntTreeData() {
    console.log(this.props)
    return (
        <div>
            {AntTree(treeData)}
        </div>
    )
}
const mapStateToProps=()=> {}
const mapDispatchToProps =(dispatch)=>{
    return {
        setItems:data=>dispatch({type:'TREE_DATA',payload:data})
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(AntTreeData)



