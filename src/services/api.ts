import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/simple/price`, {
      params: {
        ids: 'bitcoin,ethereum',
        vs_currencies: 'usd',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto stats:', error);
    return null;
  }
};

export const fetchHistoricalData = async (coin: string) => {
  try {
    const response = await axios.get(`${API_URL}/coins/${coin}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: '7', // Last 7 days
      },
    });
    return response.data.prices;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return null;
  }
};