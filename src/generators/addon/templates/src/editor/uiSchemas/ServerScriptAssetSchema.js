'use strict';

export default {
  attrs: {
    name: '服务端脚本属性',
    type: 'Group',
    enableHide: false,
    fold: false,
    children: {
      uuid: {
        name: 'UUID',
        type: 'InputText',
        valuePath: 'uuid',
        disabled: true
      },
      name: {
        name: '名称',
        type: 'InputText',
        valuePath: 'name'
      },
      code: {
        name: '脚本内容',
        type: 'CodeEditor',
        valuePath: 'data.code'
      }
    }
  }
};
