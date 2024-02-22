import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { StatuteComponent } from './statute/statute.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
    { path: 'main', component: MainComponent },
    { path: 'form', component: FormComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'statute', component: StatuteComponent },
];
