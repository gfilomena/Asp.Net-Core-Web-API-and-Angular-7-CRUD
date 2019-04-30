import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailComponent } from './payment-detail.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


describe('PaymentDetailComponent', () => {
    let component: PaymentDetailComponent;
    let fixture: ComponentFixture<PaymentDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule,
                HttpClientModule,
                ToastrModule.forRoot()
              ],
            declarations: [PaymentDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});