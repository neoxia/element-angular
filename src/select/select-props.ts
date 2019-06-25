import { EventEmitter, Input, Output } from '@angular/core'

export type SelectOption = {
  label?: string | number,
  value: any,
}

export class ElSelectProps {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
  @Input() clearable: boolean = false
  @Input() name: string
  @Input() size: string               // enum: large, small, mini
  @Input() placeholder: string = '请选择'
  @Input() multiple: boolean = false
  @Input('popper-class') popperClass: string
  
  // bind value
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  @Input() filterable: boolean = false;
  @Input('filter-method') filterMethod?: (query: string|number, option: SelectOption) => boolean;
}
