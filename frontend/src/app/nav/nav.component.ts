import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MatRippleModule } from '@angular/material/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  TitleStrategy,
} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule,
  ],
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private titleStrategy = inject(TitleStrategy);
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  public title = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      switchMap(() =>
        this.route.firstChild ? this.route.firstChild.data : this.route.data
      ),
      map((data: any) => data.title)
    )
  );

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
