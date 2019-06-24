import { Component, Input, OnInit, Optional } from '@angular/core'
import { ElSelect } from './select'

@Component({
  selector: 'el-option',
  template: `
    <li class="el-select-dropdown__item"
      *ngIf="visible"
      [class.is-disabled]="elDisabled || rootDisabled"
      [class.selected]="itemSelected"
      (click)="clickHandle($event)">
      <span>{{ label }}</span>
    </li>
  `,
})
export class ElOption implements OnInit {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
  @Input() value: any
  @Input() label: string | number
  
  rootDisabled: boolean = false
  itemSelected: boolean = false
  visible: boolean = true;
  
  constructor(
    @Optional() private rootSelect: ElSelect,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
    if (this.elDisabled || this.rootDisabled) return
    this.rootSelect.changeLabel(this.label, this.value)
  }
  
  ngOnInit(): void {
    this.rootSelect.search$.subscribe(query => {
      const method = this.rootSelect.filterMethod || this.rootSelect.filterByLabel;
      this.visible = method(query, this)
    })

    const updateHandle = () => {
      if (this.rootSelect.multiple) {
        this.itemSelected = Array.isArray(this.rootSelect.model) && this.rootSelect.model.indexOf(this.value) > -1
      } else {
        this.itemSelected = this.value === this.rootSelect.model
      }
      this.itemSelected && this.rootSelect.changeLabel(this.label)
    }

    this.rootDisabled = this.rootSelect.elDisabled
    updateHandle()
    this.rootSelect.subscriber.push(updateHandle)
    
    this.rootSelect.appendOptions({
      value: this.value,
      label: this.label,
    })
  }
}
