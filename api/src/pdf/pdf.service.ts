
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generateDashboardPdf(): Promise<Buffer> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const response = await axios.post('http://localhost:3000/api/session', {
        username: 'saransathi1010@gmail.com',
        password: 'saransathish1',
      });
      await page.setExtraHTTPHeaders({
        'X-Metabase-Session': response.data.id,
      });

      await page.goto('http://localhost:3000/dashboard/1', {
        waitUntil: 'networkidle0',
      });

      await page.setViewport({ width: 1920, height: 1080 });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
          top: '10mm',
          right: '10mm',
          bottom: '10mm',
          left: '10mm',
        },
        scale: 0.75,
      });

      await browser.close();

      return Buffer.from(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  }
}
