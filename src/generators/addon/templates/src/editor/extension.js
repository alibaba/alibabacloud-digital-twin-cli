import HelloWorld from './uiElements/HelloWorld';
import assetSchema from './uiSchemas/assetSchema';
import componentSchema from './uiSchemas/componentSchema';

export default {
  /***********扩展配制参数***********/
  //控件扩展
  UIElements: {
    HelloWorld: HelloWorld
  },
  //菜单扩展
  MenuItems: {
    主菜单测试: {
      type: 'menu',
      onClick() {
        alert('这个主菜单测试');
      }
    }
  },
  //对象创建菜单扩展
  GameObjectCreatorMenuItems: {
    对象菜单测试: {
      type: 'menu',
      onClick() {
        alert('这个对象主菜单测试');
      }
    }
  },
  //工具栏扩展
  Tools: {
    //right:分为左布局left，还是右侧局right，中间是groupKey,相同则在一个group中,最后layout是按钮key,唯一
    'right/layout/toolTest': {
      type: 'DTTool',
      config: {
        title: '测试按钮',
        icon: 'iconyuncunchu',
        onClick() {
          alert('这个工具栏测试');
        }
      }
    }
  },
  //Tab面板扩展
  Tabs: {
    //面板id,Tabs中需唯一
    TestTab: {
      name: '测试面板',
      icon: '',
      type: 'HelloWorld', //引用UIElement中控件
      isSelectInDock: true
    }
  },
  //测试脚本资产创建上下文菜单.
  UIAssetCreatorMenuItems: {
    创建我的脚本: [
      'AssetCreateCreator',
      {
        assetType: 'MyScript',
        name: '我的脚本',
        data: {
          code: `function Script(context) {
  return {
    onStart() {
      console.log('Server Start...');
    },
    onVariableUpdate(changelog, pipeline) {
      console.log('variable update: ', changelog.attrs, changelog.before);
    },
  };
}`
        }
      }
    ]
  },
  // 服务端脚本资产.
  UIAssets: {
    MyScript: {
      name: '我的脚本',
      icon: 'iconyuncunchu',
      inspect: [
        'AssetInspectorCreator',
        {
          schema: assetSchema
        }
      ],
      uiPanel: [
        'AssetUIPanelCreator',
        {
          icon: 'iconyuncunchu'
        }
      ],
      data: ['AssetDataCreator'],
      contextMenu: {
        复制: ['AssetContextMenuCopyCreator'],
        删除: ['AssetContextMenuDeleteCreator']
      }
    }
  },
  // 服务端脚本组件.
  Components: {
    MyScriptComponent: {
      name: '我的脚本',
      group: '其他组件',
      icon: 'iconyuncunchu',
      inspect: {
        type: 'DTInspectNav',
        config: {
          schema: componentSchema
        }
      }
    }
  },
  //系统扩展
  Systems: {},
  /***********生命周期函数(高级用法)***********/
  onLoad() {},
  onReady() {},
  onUnload() {}
};
