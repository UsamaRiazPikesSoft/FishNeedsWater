const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@layout-header-background':'#fff','@layout-sider-width':'25%','@layout-body-background':'#E9EBEE',
     '@tabs-bar-margin': '0 0 0 350px',
     '@layout-header-height': '70px',
     '@tabs-active-color': '#000',
     '@tabs-hover-color': '#000',
     '@tabs-card-tab-active-border-top': '0px ',
     '@list-item-meta-avatar-margin-right': '0px',
     '@list-item-meta-title-margin-bottom': '0px' },
   }),
  );
  