import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoreService {
  selectedColorSubject = new BehaviorSubject<string | null>('#000000');
  selectedColor$: Observable<string | null> = this.selectedColorSubject.asObservable();

  saveColor(hexColor: string): void {
    this.selectedColorSubject.next(hexColor);
  }
}
