import { TestBed, inject } from '@angular/core/testing';

import { PaymentDetailService } from './payment-detail.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('PaymentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentDetailService],
      imports: [
        HttpModule,
        HttpClientModule
      ],
    });
  });

  it('should be created', inject([PaymentDetailService], (service: PaymentDetailService) => {
    expect(service).toBeTruthy();
  }));
});