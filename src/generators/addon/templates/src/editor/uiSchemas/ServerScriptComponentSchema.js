'use strict';

/**
 * Server-side Script Component Schema.
 */
export default {
  attributes: {
    name: '服务端脚本设置',
    type: 'Group',
    enableHide: false,
    fold: false,
    children: {
      scriptId: {
        name: '服务端脚本',
        type: 'SelectCustomAsset',
        assetType: 'ServerScript',
        valuePath: 'scriptId'
      }
    }
  },
  kwargs: {
    type: 'GroupList',
    name: '参数设置',
    enableHide: false,
    isShowName: false,
    templateName: '参数${i}',
    fold: false,
    children: {
      kwargsSuite: {
        type: 'Suite',
        children: {
          key: {
            type: 'InputText',
            valuePath: 'kwargs.${index}.key',
            col: 11,
            default: ''
          },
          value: {
            type: 'InputText',
            valuePath: 'kwargs.${index}.value',
            col: 11,
            offset: 1,
            default: ''
          }
        }
      }
    }
  }
};
