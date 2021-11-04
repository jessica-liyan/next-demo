const providerColumns = [
  {
    title: '供稿人ID',
    dataIndex: 'id',
    key: 'id',
    width: 100
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
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (id, record) => {
      var text = '';
      switch (record.status) {
        case 1:
          text = '有效';
          break;
        case 2:
          text = '已过期';
          break;
        case 3:
          text = '已解约';
          break;
        case 4:
          text = '已冻结';
          break;
      }
      return text;
    }
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
    title: '供稿类别',
    dataIndex: 'feedType',
    key: 'feedType',
    width: 150,
    render: (id, record) => {
      const list = {
        "1": "插画",
        "2": "设计模板",
        "3": "背景",
        "4": "元素",
        "5": "PPT模板",
        "6": "摄影图片"
      }
      return record.feedType.split(',').map(item => list[item]).join('、');
    }
  },
  {
    title: '供稿等级',
    dataIndex: 'feedLevel',
    key: 'feedLevel',
    width: 100,
    render: (id, record) => {
      var text = '';
      switch (record.feedLevel) {
        case 1:
          text = '普通';
          break;
        case 2:
          text = '精品';
          break;
      }
      return text;
    }
  },
  {
    title: '合同签署时间',
    dataIndex: 'signDate',
    key: 'signDate',
    width: 200
  },
];

export {providerColumns};