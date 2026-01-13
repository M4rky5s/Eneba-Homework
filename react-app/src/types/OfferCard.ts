export type OfferCard = {
  offerId: number;
  gameId: number;
  title: string;
  image_url: string;
  platform: string;
  store: string;
  original_price: number;
  final_price: number;
  discount_percent: number;
  cashback_amount: number;
  region: string;
  likes: number;
};