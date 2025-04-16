import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getCustomers = () => axios.get(`${API_BASE_URL}/customers`);
export const getCustomerById = (id) =>
  axios.get(`${API_BASE_URL}/customers/${id}`);
export const createCustomer = (data) =>
  axios.post(`${API_BASE_URL}/customers`, data);

export const transferMoney = (data) =>
  axios.post(`${API_BASE_URL}/transactions`, data);
export const getTransactionsForAccount = (accountNumber) =>
  axios.get(`${API_BASE_URL}/transactions/${accountNumber}`);
