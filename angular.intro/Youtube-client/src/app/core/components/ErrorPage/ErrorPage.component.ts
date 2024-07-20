import {  Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-error-page',
    standalone: true,
    imports: [
    HeaderComponent
],
    templateUrl: './ErrorPage.component.html',
    styleUrl: './ErrorPage.component.scss',

})
export class ErrorPageComponent {

}
