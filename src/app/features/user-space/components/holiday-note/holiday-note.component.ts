import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'user-space-holiday-note',
  templateUrl: './holiday-note.component.html',
  styleUrls: ['./holiday-note.component.scss'],
})
export class HolidayNoteComponent implements OnInit {
  shouldShowTooltip = false;
  tooltipDirection: 'right' | 'left' = 'left';

  @ViewChild('tooltip') tooltip?: ElementRef<HTMLParagraphElement>;
  @HostListener('document:click', ['$event'])
  onClickDocument(event: PointerEvent) {
    if (
      this.shouldShowTooltip &&
      !this.tooltip?.nativeElement.contains(event.target as any)
    ) {
      this.toggleTooltip();
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onClickInfoButton(event: MouseEvent) {
    this.tooltipDirection = event.clientX > 200 ? 'left' : 'right';
    this.toggleTooltip();
    // Used so that the listener on the document is not triggered too
    event.stopPropagation();
  }

  toggleTooltip() {
    this.shouldShowTooltip = !this.shouldShowTooltip;
  }
}
