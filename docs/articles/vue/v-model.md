---
title: 自定义v-model
editLink: true
---

# {{ $frontmatter.title }}

>> 主要是利用ES6的Proxy来劫持对象是否修改，如果修改则触发`update`事件，从而实现`v-model`的双向绑定,主要实现v-model的数据单向流
> 
> 代码如下:
~~~js
import { computed } from "vue";
export function useVModel(props: any, propName: string, emit) {
  return computed({
    get() {
      if (
        Object.prototype.toString.call(props[propName]) === "[object Object]"
      ) {
        return new Proxy(props[propName], {
          set(target, key, value) {
            console.log(value);
            target[key] = value;
            emit(`update:${propName}`, target);
            return true;
          }
        });
      } else {
        return props[propName];
      }
    },
    set(val) {
      emit(`update:${propName}`, val);
    }
  });
}
~~~

>> 使用明细
> 
> 代码如下:
~~~ts
const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({
            keyword: "",
            selectedValue: "1",
            options: [
                {
                    label: "视频",
                    value: "1"
                },
                {
                    label: "文章",
                    value: "2"
                },
                {
                    label: "用户",
                    value: "3"
                }
            ]
        })
    }
});
const emit = defineEmits(["update:modelValue"]);
const model = useVModel(props, "modelValue", emit);

~~~