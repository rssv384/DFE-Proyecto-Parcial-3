import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="not-found-container">
    <h1>404 Page Not Found</h1>
  </div> `,
  styles: [
    `
      .not-found-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: wrap;
      }
    `,
  ],
})
export class NotFoundComponent {}
