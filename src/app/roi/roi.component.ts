import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-roi',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './roi.component.html',
  styleUrl: './roi.component.css'
})
export class ROIComponent {
  pdfSrc = "assets/pdfs/Lukala Ngangu_ROI_Ren.pdf";

}


