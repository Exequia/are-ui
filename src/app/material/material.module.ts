import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';

const materialModules = [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatStepperModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
