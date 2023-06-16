const mapping: Record<string, string> = {
  'financial-goals': 'financial_goal',
  finteches: 'fintech',
  investments: 'investment',
  'investment-products': 'investment_product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
