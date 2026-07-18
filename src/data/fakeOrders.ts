export interface Customer {
  id: string;
  name: string;
  email: string;
  address: string;
}

export interface Order {
  orderId: string;
  orderDate: string;
  customer: Customer;
  orderStatus: string;
  totalPrice: number;
  paymentMethod: string;
  shippingMethod: string;
}

const fakeOrders: Array<Order> = [
  {
    orderId: "ORD001",
    orderDate: "2025-01-15",
    customer: {
      id: "CUST001",
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    orderStatus: "Shipped",
    totalPrice: 150000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD002",
    orderDate: "2025-03-22",
    customer: {
      id: "CUST002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Elm St, Othertown, USA",
    },
    orderStatus: "Processing",
    totalPrice: 200000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD003",
    orderDate: "2025-07-10",
    customer: {
      id: "CUST003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: "789 Oak St, Sometown, USA",
    },
    orderStatus: "Delivered",
    totalPrice: 300000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD004",
    orderDate: "2025-12-05",
    customer: {
      id: "CUST004",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      address: "101 Pine St, Anycity, USA",
    },
    orderStatus: "Cancelled",
    totalPrice: 100000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
];

export default fakeOrders;
