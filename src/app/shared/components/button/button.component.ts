import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromRoot from 'store';

@Component({
  selector: 'are-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Input() disabled: boolean | undefined = false;
  @Input() loadingColor: string = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  public loading: boolean | undefined;
  private unsubscribeAll: Subject<any> = new Subject();

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {
    this.store
      .select(fromRoot.isLoading)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(_loading => (this.loading = _loading));
  }

  emmitClick() {
    if (!this.disabled || !this.loading) {
      this.onClick.emit();
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
