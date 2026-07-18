import fakeOrders from "../data/fakeOrders";
import { fakeProducts } from "../data/fakeProducts";
import { finalProfitMarginPercentage } from "../fragments/Chart/SimpleBarChart";

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeProducts);
    }, 1000); // Simulate a network delay
  });
}

export function fetchProfit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(finalProfitMarginPercentage);
    }, 1000); // Simulate a network delay
  });
}

export function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeOrders);
    }, 1000); // Simulate a network delay
  });
}
