interface ModalityCartDetail {
  code: string;
  name: string;
}

interface Pax {
  paxType: string;
  count: number;
  amount: number;
}

interface ModalityCart {
  detail: ModalityCartDetail;
  paxes: Pax[];
}
