import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    (httpMock: HttpTestingController, app: AppService) => {
      expect(app).toBeTruthy();
    }
  }));
});
