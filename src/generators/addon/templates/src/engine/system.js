export default {
  //数据schema定义
  dataSchema: {
    type: 'CustomSystem01',
    version: '1.0.0',
    attributes: {
      isDefault: {
        type: 'boolean',
        default: false,
        name: '是否默认'
      },
      near: {
        type: 'number',
        default: 0.1,
        name: '近平面'
      },
      uuid: {
        type: 'string',
        default: '',
        name: 'uuid'
      }
    }
  },
  //系统开发
  system: {
    // override
    async onInit() {},

    onActive() {},

    onInActive() {},

    onUpdate(delta) {}
  }
};
