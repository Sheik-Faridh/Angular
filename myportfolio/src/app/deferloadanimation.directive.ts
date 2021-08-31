import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[deferLoadAnimation]',
})
export class DeferloadanimationDirective implements AfterViewInit, OnDestroy {
  @Output() public deferLoadAnimation: EventEmitter<void> = new EventEmitter();

  private _intersectionObserver?: IntersectionObserver;

  constructor(private _element: ElementRef) {}

  public ngAfterViewInit() {
    if (this.isCompactibleBrowser()) {
      this.registerIntersectionObserver();
      this.observeTargetEle();
    }
  }

  public ngOnDestroy() {
    this._intersectionObserver && this._intersectionObserver.disconnect();
  }

  public isCompactibleBrowser() {
    const hasIntersectionObserver: boolean = 'IntersectionObserver' in window;

    return hasIntersectionObserver;
  }

  public observeTargetEle() {
    this._intersectionObserver &&
      this._element.nativeElement &&
      this._intersectionObserver.observe(<Element>this._element.nativeElement);
  }

  private intersectionObserverCallback(
    entries: Array<IntersectionObserverEntry>
  ) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (
        entry &&
        entry.isIntersecting &&
        entry.target === this._element.nativeElement
      ) {
        this.deferLoadAnimation.emit();
        this._intersectionObserver &&
          this._element.nativeElement &&
          this._intersectionObserver.unobserve(
            <Element>this._element.nativeElement
          );
      }
    });
  }

  private registerIntersectionObserver() {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.intersectionObserverCallback(entries);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
  }
}
