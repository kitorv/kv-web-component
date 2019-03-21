(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251989a4"],{"7f7f":function(e,n,a){var t=a("86cc").f,d=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in d||a("9e1e")&&t(d,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},f6f9:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"content element-doc"},[a("h2",[e._v("单元格格式化")]),a("kv-code-snippet",[a("div"),a("element-demo0",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          {\n            key: "name",\n            title: "姓名",\n            formatter(h, { data }) {\n              return <div class="kv-datagrid-demo--tag">{data.name}</div>;\n            }\n          },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" },\n          {\n            key: "",\n            title: "操作",\n            formatter(h, { data }) {\n              return (\n                <div>\n                  <div class="kv-datagrid-demo--button">编辑</div>\n                  <div class="kv-datagrid-demo--button danger">删除</div>\n                </div>\n              );\n            }\n          }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 16,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 18,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 30,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("展开行")]),a("kv-code-snippet",[a("div"),a("element-demo1",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid :columns="columns" :data="data">\n    <div slot="expansion" slot-scope="{data}" style="height:60px;padding:20px">\n      <div>姓名：{{data.name}}</div>\n      <div>年龄：{{data.age}}</div>\n      <div>地址：{{data.address}}</div>\n    </div>\n  </kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { type: "expansion" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("自定义表头")]),a("kv-code-snippet",[a("div"),a("element-demo2",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          {\n            key: "address",\n            title: "地址",\n            columnFormatter: h => (\n              <input\n                placeholder="自定义格式化文本框"\n                class="kv-datagrid-demo--input"\n              />\n            )\n          }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},d=[],r=a("cebc"),s=(a("7f7f"),{name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-datagrid",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){this.$createElement;return{columns:[{key:"name",title:"姓名",formatter:function(e,n){var a=n.data;return e("div",{class:"kv-datagrid-demo--tag"},[a.name])}},{key:"age",title:"年龄"},{key:"address",title:"地址"},{key:"",title:"操作",formatter:function(e,n){n.data;return e("div",[e("div",{class:"kv-datagrid-demo--button"},["编辑"]),e("div",{class:"kv-datagrid-demo--button danger"},["删除"])])}}],data:[{key:"1",name:"John Brown",age:16,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:18,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:30,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo1":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-datagrid",{attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([{key:"expansion",fn:function(n){var t=n.data;return a("div",{staticStyle:{height:"60px",padding:"20px"}},[a("div",[e._v("姓名："+e._s(t.name))]),e._v(" "),a("div",[e._v("年龄："+e._s(t.age))]),e._v(" "),a("div",[e._v("地址："+e._s(t.address))])])}}])})]],2)},n=[],a={data:function(){return{columns:[{type:"expansion"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo2":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-datagrid",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){this.$createElement;return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址",columnFormatter:function(e){return e("input",{attrs:{placeholder:"自定义格式化文本框"},class:"kv-datagrid-demo--input"})}}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}()}}),o=s,i=a("2877"),l=Object(i["a"])(o,t,d,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-251989a4.e1ccde9b.js.map