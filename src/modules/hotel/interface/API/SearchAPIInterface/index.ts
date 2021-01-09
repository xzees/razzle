export default interface SearchAPIInterface {
  longitude: number;
  latitude: number;
  startDate: string;
  endDate: string;
  adult: number;
  room: number;
  child: number;
  order_by?: string;
  order_dir?: string;
  offset?: number;
  row?: number;
  type?: string;
  stars?: string;
  hotel_id?: string;
  source?: string;
}