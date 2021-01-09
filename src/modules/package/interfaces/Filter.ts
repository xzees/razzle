interface PriceRange {
  from: number;
  to?: number;
}

interface Filter {
  priceRange: PriceRange;
}
