import puppeteer from 'puppeteer';

export default async function SavePDF({ output }) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto('http://localhost:5173')
  await page.emulateMediaType('print')

  const pdf = await page.pdf({
    path: output,
    format: 'A4',
    scale: 1.1,
    margin: {
      top: '0.38in',
      bottom: '0.38in',
      left: '0.38in',
      right: '0.38in',
    },
  });

  await browser.close()

  return pdf
}



