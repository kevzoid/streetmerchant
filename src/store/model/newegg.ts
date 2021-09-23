import {Store} from './store';
import fetch from 'node-fetch';

export const Newegg: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: [
      {
        container: '.product-buy',
        text: ['add to cart'],
      },
      {
        container: '.loading-text',
        text: ['add to cart'],
      },
      {
        container: '.product-promo',
        text: ['this item can only be purchased with a combo'],
      },
    ],
    maxPrice: {
      container: '.price-current',
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.com/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
    },
    // TEST IN-STOCK
    // {
    //   brand: 'evga',
    //   model: 'ftw3 ultra',
    //   series: '3080',
    //   url: 'https://www.newegg.com/global/il-en/gigabyte-radeon-rx-6600-xt-gv-r66xtgamingoc-pro-8gd/p/N82E16814932473?Item=N82E16814932473&Tpk=N82E16814932473',
    // },
    // {
    //   brand: 'evga',
    //   model: 'ftw3 ultra',
    //   series: '3080',
    //   url: 'https://www.newegg.com/global/il-en/abs-ala258/p/N82E16883360172?Description=RTX%2020&cm_re=RTX_20-_-83-360-172-_-Product',
    // },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.newegg.com/global/il-en/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535?Item=N82E16814487535',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.newegg.com/global/il-en/evga-geforce-rtx-3060-ti-08g-p5-3667-kl/p/N82E16814487546?Item=N82E16814487546',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.newegg.com/global/il-en/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530?Item=N82E16814487530',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.newegg.com/global/il-en/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532?Item=N82E16814487532',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.newegg.com/global/il-en/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342?Item=N82E16814932342&Tpk=N82E16814932342',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.newegg.com/global/il-en/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518?Item=N82E16814487518&Tpk=N82E16814487518',
    },
  ],
  name: 'newegg',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
