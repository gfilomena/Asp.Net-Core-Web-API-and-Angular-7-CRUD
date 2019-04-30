import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailListComponent } from './payment-detail-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('PaymentDetailListComponent', () => {
    let component: PaymentDetailListComponent;
    let fixture: ComponentFixture<PaymentDetailListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[ HttpModule,
                      HttpClientModule,
                      ToastrModule.forRoot()],
            declarations: [PaymentDetailListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentDetailListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});