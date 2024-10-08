// src/pdf/pdf.controller.ts
import {
    Controller,
    Post,
    Res,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { PdfService } from './pdf.service';
  
  @Controller('pdf')
  export class PdfController {
    constructor(private readonly pdfService: PdfService) {}
  
    @Post('generate')
    async generatePdf(@Res() res: Response) {
      try {
        const pdfBuffer = await this.pdfService.generateDashboardPdf();
  
        // Set response headers for download
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="dashboard.pdf"',
          'Content-Length': pdfBuffer.length,
        });
  
        return res.status(HttpStatus.OK).send(pdfBuffer);
      } catch (error) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Error generating PDF');
      }
    }
  }
  