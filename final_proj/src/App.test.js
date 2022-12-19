import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from './App';
import Login from './Login';
import Checkout from "./Checkout";

import { ValidateUser } from "./components/axiosUtils";
import { shallow } from 'enzyme';

const validUser = {
	'email': 'eve.holt@reqres.in',
	'password': 'cityslicka'
  }
  
const invalidUser = {
	'email': 'aaa',
	'password': '111'
}

afterEach(cleanup);
jest.mock("axios");

describe("Check Main screen", ()=>{
	it("check if there is a button for discover products",()=>{
    render(<App />); 
		const btn_discover = screen.getByTestId("discover-btn");
	  expect(btn_discover).toBeInTheDocument();
	});

    it("check if there is a button for homepage navigate",()=>{
    render(<App />); 
		const btn_home = screen.getByTestId("home-nav");
	  expect(btn_home).toBeInTheDocument();
	});

    it("check if there is a button for cart",()=>{
    render(<App />); 
		const btn_about = screen.getByTestId("my-cart");
	  expect(btn_about).toBeInTheDocument();
	});

    it("check if there is a button for products page navigate",()=>{
    render(<App />);
		const btn_products = screen.getByTestId("products-nav");
	  expect(btn_products).toBeInTheDocument();
	});

    it("check if there is a button for login page navigate",()=>{
    render(<App />);
		const btn_login = screen.getByTestId("login-nav");
	  expect(btn_login).toBeInTheDocument();
	});

	test('clicking home link navigates to home page', () => {
		render(<App />);
		fireEvent.click(screen.getByText('HOME'));
		expect(window.location.pathname).toBe('/');
	});

	test('clicking products link navigates to products page', () => {
		render(<App />);
		fireEvent.click(screen.getByText('PRODUCTS'));
		expect(window.location.pathname).toBe('/products');
	});

	test('clicking cart link navigates to cart page', () => {
		render(<App />);
		fireEvent.click(screen.getByText('0'));
		expect(window.location.pathname).toBe('/my-cart');
	});

	test('clicking checkout link navigates to checkout page', () => {
		render(<App />);
		fireEvent.click(screen.getByText('CHECKOUT'));
		expect(window.location.pathname).toBe('/checkout');
	});

	test('clicking login link navigates to login page', () => {
		render(<App />);
		fireEvent.click(screen.getByText('LOGIN'));
		expect(window.location.pathname).toBe('/login');
	});
})

////////////////TEST FOR LOGIN SCREEN
describe("Check Login screen", ()=>{
	it("check if there is an email input",()=>{
    render(<Login />);
		const input = screen.getByTestId("email-input");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "text");
	});

    it("check if there is a password input",()=>{
    render(<Login />);
		const input = screen.getByTestId("password-input");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "password");
	});

    it("check if there is a button for logging in",()=>{
    render(<Login />);
		const btn_login = screen.getByTestId("login-btn");
	  expect(btn_login).toBeInTheDocument();
	});

	it("ValidateUser fn exist", async () => {
		expect(ValidateUser(validUser)).toBeDefined();
	});

	it("user is valid", async () => {
    	axios.post.mockResolvedValueOnce(validUser);
    });	

	it("should not return a token", async () => {
      	axios.post.mockImplementation('Invalid user');
    });

	it("user is invalid", async () => {
    	axios.post.mockImplementationOnce(invalidUser);
    });
})

///////////// TEST FOR CHECKOUT PAGE
describe("Check checkout screen", ()=>{
	it("check if there is an checkout page content",()=>{
    render(<Checkout />);
		const input = screen.getByTestId("checkout-test");
		expect(input).toBeInTheDocument();
	});

    it("check if there is a button for place order modal",()=>{
    render(<Checkout />);
		const btn_placeorder = screen.getByTestId("placeorder-test");
		expect(btn_placeorder).toBeInTheDocument();
	});
})