
import { Routes }  from '@angular/router'
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGuardService } from './service/login-guard.service';
export const APP_ROUTES : Routes = [
    {
        path : '',
        redirectTo : 'signin',
        pathMatch : "full"
    },{
        path : 'signin',
        component :SigninComponent
},
{
    path :'signup',
    component: SignupComponent
},
{
    path :'obsdemo',
    component: ObservableDemoComponent
},
{
    path :'pipedemo',
    component: PipeDemoComponent,
    canActivate: [LoginGuardService]
},
{
    path :'pagenotfound',
    component: PagenotfoundComponent
},
{
    path :'product',
    component: ProductComponent,
    children:[{
        path: 'overview/:id',
        component : OverviewComponent
    },
    {
        path: 'spec',
        component : SpecificationComponent
    }]
},
{
    path:'employee',
    loadChildren : 'app/modules/employeeModule/employee.module#EmployeeModule'
},
{
    path : '**',
    redirectTo : 'pagenotfound',
    pathMatch : 'full'
}
]