import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';


describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  test('navigate to "" redirects user to /color-picker', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/color-picker');
    });
  }));

  test('navigate to non-existing route takes user to 404 page', fakeAsync(() => {
    router.navigate(['/test']).then(() => {
      expect(location.path()).toBe('/404');
    });
  }));
});
