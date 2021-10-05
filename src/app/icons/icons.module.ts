import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';

@NgModule({
  imports: [
    BootstrapIconsModule.pick(allIcons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add BootstrapIconsModule to the 'exports', since the <bi> component will be used in templates of parent module
// 2. Don't forget to pick some icons using BootstrapIconsModule.pick({ ... })