import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const SUB_COMPONENT = [
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ...SUB_COMPONENT
    ],
    providers: [],
    exports: []
})
export class PageModule { }
