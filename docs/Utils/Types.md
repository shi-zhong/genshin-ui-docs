### 类型

```ts
ReadTypeFrom('type') // { type: 'string'}
ReadTypeFrom(0) // { type: 'number'}
ReadTypeFrom(['string', 0, 'type']) // { type: 'array', each: [{type: 'string'}, {type: 'number'}]}
ReadTypeFrom({ a: 1 }) // { type: 'object', items: [{ name: 'a', type: 'number'}]}


SearchPath({a: {b: 'b'}}, 'a.b') // 'b'
SearchPath([1, 2, {a: 'a'}], '2.a') // 'a'

// 一般配合ReadTypeFrom使用
VerifyType({ type: 'string'}, 'string')

// 把一个类型的变量提取路径或转换类型成另一个类型
/**
 * mode 拥有 path 和 name 属性，path 代表路径，path 不存在时， name可作为相对路径
 * 以$开头代表相对路径
 */
// @todo 看源码写文档
TypeTransfer<T>(
  {
    type: 'object',
    items: [
      {
        name: 'uuid',
        path: 'id',
        type: 'direct'
      },
      {
        name: 'basic',
        path: 'basic',
        type: 'object',
        items: [
          {
            name: 'name',
            type: 'direct'
          },
          {
            name: 'star',
            type: 'direct'
          },
          {
            name: 'type',
            type: 'direct',
            mapper: (type) => typeToCode(type)
          }
        ]
      },
      {
        name: 'story',
        type: 'direct'
      }
    ]
  },
  data as object
);
```

```ts
/**
 * 使用TS获取类型提示
 * @param mode 匹配模式
 * @param data 匹配数据
 * @returns
 */
export const VerifyType = <T>(mode: Types, data: any): data is T => { /** */ };

/**
 * 从对象或者数组上获取路径数据
 * @param target
 * @param path path.path.. 使用 . 拆分路径
 */
export const SearchPath = (target: object | any[], path: string) => { /** */ };

/**
 * 从一个对象上提取数据，组合成另一个对象或者数组
 * @param mode
 * @param source
 */
export function TypeTransfer<T = unknown>(mode: SourceObject, source: object | any[]): T;
export function TypeTransfer<T = unknown>(mode: SourceArray, source: object | any[]): T[];
export function TypeTransfer<T>(mode: SourceObject | SourceArray, source: object | any[]) { /** */ }


export const ReadTypeFrom = (target: string | number | boolean | array | object): Types => { /** */ };
```