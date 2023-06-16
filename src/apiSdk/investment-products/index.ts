import axios from 'axios';
import queryString from 'query-string';
import { InvestmentProductInterface, InvestmentProductGetQueryInterface } from 'interfaces/investment-product';
import { GetQueryInterface } from '../../interfaces';

export const getInvestmentProducts = async (query?: InvestmentProductGetQueryInterface) => {
  const response = await axios.get(`/api/investment-products${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createInvestmentProduct = async (investmentProduct: InvestmentProductInterface) => {
  const response = await axios.post('/api/investment-products', investmentProduct);
  return response.data;
};

export const updateInvestmentProductById = async (id: string, investmentProduct: InvestmentProductInterface) => {
  const response = await axios.put(`/api/investment-products/${id}`, investmentProduct);
  return response.data;
};

export const getInvestmentProductById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/investment-products/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInvestmentProductById = async (id: string) => {
  const response = await axios.delete(`/api/investment-products/${id}`);
  return response.data;
};
