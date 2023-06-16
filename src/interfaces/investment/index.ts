import { InvestmentProductInterface } from 'interfaces/investment-product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvestmentInterface {
  id?: string;
  amount: number;
  investment_product_id?: string;
  investor_id?: string;
  created_at?: any;
  updated_at?: any;

  investment_product?: InvestmentProductInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvestmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  investment_product_id?: string;
  investor_id?: string;
}
