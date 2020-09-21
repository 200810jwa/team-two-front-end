import {Directive, ElementRef, Input, Output, EventEmitter, OnChanges} from "@angular/core";

@Directive({
    selector: '[contenteditableModel]',
    // TSLint will siggest that we don't use the host and instead use @hostbinding, 
    // after some basic research, there is no issue with usign host here
    host: {
        //These just say to run the function onEdit if either of these events occur, blur occurs when the user exits focus from an element and keyup is literally when a key moves upward and is unpressed.
        '(blur)': 'onEdit()',
        '(keyup)': 'onEdit()'
    }
})

export class ContentEditableDirective implements OnChanges {
    @Input('contenteditableModel') model: any;
    @Output('contenteditableModelChange') update = new EventEmitter();

    constructor(
        private elementRef: ElementRef
    ) {
        // console.log('ContentEditableDirective.constructor');
    }

    ngOnChanges(changes) {
        if (changes.model.isFirstChange()){
          this.elementRef.nativeElement.textContent = this.model;
        }
    }

    onEdit() {
        var value = this.elementRef.nativeElement.innerText;
        this.update.emit(value);
    }
}

