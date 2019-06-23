import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExSelectComponent {
  
  exClass1: any = class {
    value: any
    foods:any = [{value: '选项1',label: 'Gold cake' },
      { value: '选项2', label: 'Double skin milk' },
      { value: '选项3', label: 'Oyster sauce' },
      { value: '选项4', label: 'Dragon mustard' },
      { value: '选项5', label: 'Peking duck' }]
    
    query: string;
    queryChange(query: string): void {
      this.query = query;
    }
    filterByQuery(arr: any[]): any[] {
      if (!this.query) {
        return arr;
      }
      const reg = new RegExp(this.query, 'i')
      return arr.filter(item => {
        return reg.test(item.label);
      })
    }

    handle(event: any):void {
      this.value = event
      console.log(event)
    }
  
    clear(): void {
      this.value = null
    }
  }

  exClass: any = class {
    value: any
    foods:any = [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]
    
    handle(event: any):void {
      this.value = event
      console.log(event)
    }
  
    clear(): void {
      this.value = null
    }
  }
  code: string[] = code
  page: any = {
    previous: { name: 'InputNumber 计数器', link: '/form/input-number' },
    next: {  name: 'Cascader 级联选择器', link: '/form/cascader' },
  }

}
