import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee.component";
import { RouterModule } from "@angular/router";
import { LAZY_ROUTES } from "./employee.routes";

@NgModule({
    imports :[CommonModule, RouterModule.forChild(LAZY_ROUTES)],
    declarations :[EmployeeComponent]
})
export class EmployeeModule{}