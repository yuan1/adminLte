import { NgModule } from '@angular/core';

import { AdminLteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AdminLteSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AdminLteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AdminLteSharedCommonModule {}
