import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  pdfSrc = "assets/pdfs/Reunion.pdf";
}
