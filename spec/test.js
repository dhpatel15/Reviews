const puppeteer = require('puppeteer');
const path = require('path');
const url = 'http://localhost:3001';

let page;
let browser;
const width = 1024;
const height = 512;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(path.join(url, '/restaurant/45'), { waitFor: 'networkidle2' });
});

afterAll(() => {
  browser.close();
});

describe('app functionality', () => {
})