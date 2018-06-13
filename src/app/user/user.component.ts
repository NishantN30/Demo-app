import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector : 'app-user',
    templateUrl : './user.template.html'
})
export class UserComponent {
    @Input("title") title;
    @Input("users") users : any;
    firstName : string = "Bill";
    moreInfo(user) {
        alert(`${user.firstName} is working with ${user.company}`)
    }
    @Output('childEvent') childEvent = new EventEmitter<string>();

    onKeyUp(value) {
        this.childEvent.emit(value);
    }
    
}