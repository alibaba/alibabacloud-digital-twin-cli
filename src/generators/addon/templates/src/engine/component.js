export default {
  //数据schema定义
  dataSchema: {
    type: 'MyScriptComponent',
    version: '1.0.0',
    structures: {
      kvPair: {
        name: '字段名称',
        attributes: {
          key: {
            type: 'string',
            default: '',
            name: '字段名称'
          },
          value: {
            type: 'any',
            default: '',
            name: '值内容'
          }
        }
      }
    },
    attributes: {
      scriptId: {
        type: 'string',
        name: '服务端脚本 UUID',
        default: ''
      },
      kwargs: {
        type: 'array@kvPair',
        default: [],
        name: '参数键值对'
      }
    }
  },
  //组件开发
  component: {
    // override
    async onInit() {},

    onActive() {},

    onInActive() {},

    onUpdate(delta) {}
  }
};
