import { InvestmentInterface } from 'interfaces/investment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvestmentProductInterface {
  id?: string;
  name: string;
  description: string;
  halal_status: boolean;
  advisor_id?: string;
  created_at?: any;
  updated_at?: any;
  investment?: InvestmentInterface[];
  user?: UserInterface;
  _count?: {
    investment?: number;
  };
}

export interface InvestmentProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  advisor_id?: string;
}
