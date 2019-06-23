export default [
// 基础用法
  `
<!--你可以通过 model 来获取每次选择的值-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-select [model]="value" placeholder="请选择" (modelChange)="handle($event)">
  <el-option *ngFor="let item of foods"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
<el-button (click)="clear()">clear</el-button>

<script type="text">

// in component

handle(event: any):void {
  this.value = event
  console.log(event, this.value)
}

clear(): void {
  this.value = null
}

</script>
`,

// 有禁用选项
`
<el-select [(model)]="value" placeholder="请选择">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { elDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [elDisabled]="item.elDisabled"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 禁用 select
`
<el-select [model]="'选项2'" [elDisabled]="true">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 默认选中
`
<el-select [model]="'选项2'">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { elDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 有清空按钮
`
<el-select [(model)]="value" [clearable]="true">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { elDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 多选
`
<el-select [model]="value" (modelChange)="handle($event)" [clearable]="true" [multiple]="true" size="large">
  <el-option *ngFor="let item of [{value: 'hello',label: 'hello' },
    { value: 'ruby', label: 'ruby' },
    { elDisabled: true, value: 'scala', label: 'scala' },
    { value: 'javascript', label: 'javascript' },
    { value: 'java', label: 'java' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// Searchable select
`
<!--你可以通过 model 来获取每次选择的值-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-select [model]="value" placeholder="请选择" (modelChange)="handle($event)" [searchable]="true" [search]="query" (searchChange)="queryChange($event)">
  <el-option *ngFor="let item of filterByQuery(foods)"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
<el-button (click)="clear()">clear</el-button>

<script type="text">

// in component

value: any;
query: string;
foods:any = [{value: '选项1',label: 'Gold cake' },
  { value: '选项2', label: 'Double skin milk' },
  { value: '选项3', label: 'Oyster sauce' },
  { value: '选项4', label: 'Dragon mustard' },
  { value: '选项5', label: 'Peking duck' }];

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
  console.log(event, this.value)
}

clear(): void {
  this.value = null
}

</script>
`
]
