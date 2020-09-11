import { v4 } from 'uuid';

const masterKegList = [
  {
  name: "Light Beer",
  price: "5.00",
  content: "6.0",
  pints: "120",
  description: "This light beer is soothing and refreshing",
  id: v4()
},
{
  name: "IPA",
  price: "6.50",
  content: "8.0",
  pints: "120",
  description: "This IPA is little hoppy and a bit bitter",
  id: v4()
}
];

export function fakeKegService() {
  return masterKegList;
}