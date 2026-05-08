import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pspad-button',
  imports: [NgClass],
  templateUrl: './pspad-button.component.html',
  styleUrl: './pspad-button.component.scss',
})
export class PspadButtonComponent {
  @Input() shape = 'shape';
  @Input() legend = 'legend';
  @Input() iconPath = '';
}
