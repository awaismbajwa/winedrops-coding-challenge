export interface Wine {
  id: number;
  name: string;
  vintage: string;
  revenue: number;
  bottlesSold: number;
  orders: number;
  sortIndex: number;
  isTop: boolean;
  isBottom: boolean;
}
