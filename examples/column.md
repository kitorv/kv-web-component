# 列配置

## 复选框

:::demo

```html
<template>
  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { type: "checkbox" },
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 16,
            address: "New York No. 1 Lake Park"
          },
          {
            key: "2",
            name: "Jim Green",
            age: 18,
            address: "London No. 1 Lake Park"
          },
          {
            key: "3",
            name: "Joe Black",
            age: 30,
            address: "Sidney No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```

:::

## 行号

:::demo

```html
<template>
  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { type: "index" },
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 16,
            address: "New York No. 1 Lake Park"
          },
          {
            key: "2",
            name: "Jim Green",
            age: 18,
            address: "London No. 1 Lake Park"
          },
          {
            key: "3",
            name: "Joe Black",
            age: 30,
            address: "Sidney No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```

:::

## 固定列

:::demo

```html
<template>
  <div style="max-width:1980px;">
    <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名", width: 120, fixed: "left" },
          { key: "age", title: "年龄", width: 80, fixed: "left" },
          { key: "weight", title: "体重", width: 80, fixed: "left" },
          { key: "height", title: "身高", width: 200 },
          { key: "value1", title: "指标1", width: 200 },
          { key: "value2", title: "指标2", width: 200 },
          { key: "value3", title: "指标3", width: 200 },
          { key: "value4", title: "指标4", width: 200 },
          { key: "value5", title: "指标5", width: 200 },
          { key: "status", title: "健康状况", width: 200, fixed: "right" }
        ],
        data: [
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          }
        ]
      };
    }
  };
</script>
```

:::