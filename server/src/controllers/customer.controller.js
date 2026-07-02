import * as Customer from "../models/customer.model.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.getCustomers();

    res.status(200).json(customers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch customers.",
    });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.getCustomerById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found.",
      });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch customer.",
    });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.createCustomer(req.body);

    res.status(201).json(customer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create customer.",
    });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.updateCustomer(
      req.params.id,
      req.body
    );

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found.",
      });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update customer.",
    });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.deleteCustomer(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found.",
      });
    }

    res.status(200).json({
      message: "Customer deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete customer.",
    });
  }
};