const puppeteer = require('puppeteer');
const path = require('path');
const url = 'http://localhost:3020';
const axios = require('axios');

let page;
let browser;
const width = 1024;
const height = 512;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
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
  test('title loads', async () => {
    const div = '.sc-eNQAEJ.bNUVBo';
    const title = await page.$eval(div, (el) => el.textContent);
    expect(title).toEqual('What 107 People Are Saying')
  })

  test('food rating', async () => {
    const div = '.sc-bdVaJa.hkTVbh';
    const food = await page.$eval(div, (el) => el.textContent);
    expect(food).toEqual('3.0')
  })
})

describe('test API', () => {
  test('get restaurant by id', async () => {
    await axios.get('http://localhost:3020/restaurants?id=45')
      .then(({data}) => {
        expect(data).toBeDefined();
        expect(data[0].id).toEqual(45);
      })
      .catch((err) => {
        console.log(err);
        expect(err).toBeUndefined();
      });
  })
})