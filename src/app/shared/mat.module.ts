import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
    exports: [MatButtonModule, MatInputModule, MatFormFieldModule,
        MatSidenavModule, MatToolbarModule, MatIconModule, MatIconModule, MatCardModule
        , MatProgressBarModule, MatListModule, MatGridListModule, MatDialogModule,
        MatProgressSpinnerModule, MatPaginatorModule, MatAutocompleteModule]
})
export class MatModule { }
