export interface PlayFinder {
  type: string;
  id: string;
  attributes: {
    starts: string,
    ends: string,
    price: string,
    admin_fee: string,
    currency: string,
    availabilities: number
  }
}
