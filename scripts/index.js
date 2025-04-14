import path from 'node:path';

import SavePDF from './save-pdf.js'
import { __dirname } from './utlity.js'

const output = path.join(__dirname(), '../resume.pdf');

try {
  const pdf = await SavePDF({ output })
  console.log(`PDF saved successfully with size ${pdf.length} Kilobytes`)
} catch (error) {
  console.error('Error saving PDF:', error);
}
