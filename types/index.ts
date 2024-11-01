export type FetchMethod = "GET" | "POST" | "DELETE" | "PATCH";

export interface FetchResponse<T> {
  //map(arg0: (ele: any) => import("react").JSX.Element): unknown;
  data?: T;
  error?: boolean;
  message?: string;
}
export type productData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type cartType = {
  date: string;
  id: number;
  userId: number;
  products: { productId: number; quantity: number }[];
};
