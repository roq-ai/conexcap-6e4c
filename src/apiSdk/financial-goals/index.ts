import axios from 'axios';
import queryString from 'query-string';
import { FinancialGoalInterface, FinancialGoalGetQueryInterface } from 'interfaces/financial-goal';
import { GetQueryInterface } from '../../interfaces';

export const getFinancialGoals = async (query?: FinancialGoalGetQueryInterface) => {
  const response = await axios.get(`/api/financial-goals${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFinancialGoal = async (financialGoal: FinancialGoalInterface) => {
  const response = await axios.post('/api/financial-goals', financialGoal);
  return response.data;
};

export const updateFinancialGoalById = async (id: string, financialGoal: FinancialGoalInterface) => {
  const response = await axios.put(`/api/financial-goals/${id}`, financialGoal);
  return response.data;
};

export const getFinancialGoalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/financial-goals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFinancialGoalById = async (id: string) => {
  const response = await axios.delete(`/api/financial-goals/${id}`);
  return response.data;
};
