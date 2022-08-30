import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dev-meetup-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  notFoundIllustrationPath = `${environment.static}/images/404.png`;
}
