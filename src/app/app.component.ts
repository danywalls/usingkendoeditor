import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  content = 'hello from kendo';
  showEditor = false;
  status = 'edit';

  public get safeContent(): SafeHtml {
    return this.content;//this.domSanitizer.bypassSecurityTrustHtml(this.content);
  }

  constructor(private domSanitizer: DomSanitizer) {}

  toggleEditor() {
    this.showEditor = !this.showEditor;
    this.status = this.showEditor ? 'save' : 'edit';
  }
}
