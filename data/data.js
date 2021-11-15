const auditStatusArr=[{id: 0,label: "待审核"},{ id: 1,label: "已通过"},{id: -1,label: "已驳回"}]
const jobArr=[{id: 1,label: "设计从业者"},{ id: 2,label: "设计专业师生"},{id: 3,label: "非设计职业"},{id: 4,label: "非设计专业师生"}]
const feedTypeArr = [{id: 1,label: "插画"},{ id: 2, label: "设计模板" },{ id: 3, label: "背景" },{ id: 4, label: "元素" },{ id: 5, label: "PPT" },{ id: 6, label: "摄影图片" }]

const qualificationColumns = [
  {
    title: '序号',
    dataIndex: 'rowIndex',
    key: 'rowIndex',
    width: 50
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100
  },
  {
    title: '电话',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 100
  },
  {
    title: '微信',
    dataIndex: 'weChat',
    key: 'weChat',
    width: 100
  },
  {
    title: 'QQ',
    dataIndex: 'qq',
    key: 'qq',
    width: 100
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    "render": (id) =>id || id===0 ? auditStatusArr.find((item)=>item.id==id).label : '---'
  },
  {
    title: '签约类型',
    dataIndex: 'signType',
    key: 'signType',
    width: 100,
    render: (id, record) => {
      var text = '';
      switch (record.signType) {
        case 1:
          text = '买断';
          break;
        case 2:
          text = '代理';
          break;
      }
      return text;
    }
  },
  {
    title: '申请类别',
    dataIndex: 'feedType',
    key: 'feedType',
    width: 150,
    "render": (ids) => ids ? ids.split(',').map(id=>feedTypeArr.find(item=>item.id==id).label).join('、'): '---'
  },
  {
    title: '职业',
    dataIndex: 'job',
    key: 'job',
    width: 100,
    "render": (id) =>id ? jobArr.find((item)=>item.id==id).label : '---'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 200,
    "render": (text) => (text ? text : '---')
  },
  {
    title: '申请时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
    width: 200
  },
];

export {qualificationColumns};