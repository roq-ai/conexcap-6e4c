import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinancialGoalInterface {
  id?: string;
  name: string;
  amount: number;
  progress: number;
  investor_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FinancialGoalGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  investor_id?: string;
}
