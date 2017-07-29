export const OPTIONS = 'OPTIONS';
export const MARKET_INFO = 'MARKE_INFO';

function getMockOptions(count) {
  const startPrice = 2200;
  const options = [];
  for (let i = 0; i < count; i += 1) {
    options.push({
      strike: startPrice + (i * 50),
      zhenshigangganlv: '0.00',
      yinhanbodonglv: '0.00%',
      yijialv: -16.0,
      gangganbilv: 0,
      neizaijiazhi: 436.4,
      shijianjiazhi: -436.4,
      chicangliang: 1000,
      chengjialiang: 10,
      sellPrice: null,
      buyPrice: null,
      zhangdie: '0.00',
      zuixin: null
    });
  }
  return options;
}

function getMockMarketInfo() {
  return {
    zuixin: 2636.39,
    zhangdie: -0.23,
    zhangfu: -0.01,
    chengjiaoliang: 21934464,
    chicangliang: 0,
    rizengcang: 0,
    kaipan: 2627.16,
    high: 2642.69,
    low: 2619.04,
    last: 2636.63,
    jiesuan: 2636.63
  };
}

export function getMyOptions() {
  return {
    type: OPTIONS,
    payload: {
      items: getMockOptions(50000)
    }
  };
}

export function getMarketInfo() {
  return {
    type: MARKET_INFO,
    payload: getMockMarketInfo()
  };
}
