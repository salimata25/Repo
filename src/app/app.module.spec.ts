import { AppModule } from './app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(() => {
    appModule = new AppModule();
  });

  it('should create an instance', () => {
    expect(appModule).toBeTruthy();
  });
});

