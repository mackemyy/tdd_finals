import { render, screen, cleanup } from "@testing-library/react";
import App from './App';

afterEach(cleanup);

describe("Check Home screen", ()=>{
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
		const btn_about = screen.getByTestId("cart-nav");
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
})

// ////////////////TEST FOR LOGIN SCREEN
// describe("Check Login screen", ()=>{
// 	it("check if there is an email input",()=>{
//     render(<Home/>);
// 		const input = screen.getByTestId("email-input");
// 		expect(input).toBeInTheDocument();

// 		expect(input).toHaveAttribute("type", "text");
// 	});

//     it("check if there is a password input",()=>{
//     render(<Home/>);
// 		const input = screen.getByTestId("password-input");
// 		expect(input).toBeInTheDocument();

// 		expect(input).toHaveAttribute("type", "password");
// 	});

//     it("check if there is a button for logging in",()=>{
//     render(<Home/>);
// 		const btn_login = screen.getByTestId("login-input-btn");
// 	  expect(btn_login).toBeInTheDocument();
// 	});
// })


////////////////REACT TEST JEST FOR BUTTONS EXAMPLE 

// import React from 'react';
// import { shallow } from 'enzyme';
// import MyButton from './MyButton';

// describe('MyButton', () => {
//   it('calls the onClick function when clicked', () => {
//     const onClick = jest.fn();
//     const wrHomeer = shallow(<MyButton onClick={onClick} />);

//     // Simulate a click on the button
//     wrHomeer.find('button').simulate('click');

//     // Assert that the onClick function was called
//     expect(onClick).toHaveBeenCalled();
//   });
// });


//////////////////DEFAULT CODE FROM TDD FILES GDRIVE

// describe("Check if ValidateUser fn is defined", () => {
// 	it("ValidateUser fn exist", async () => {
// 		// jest assertion that Validate fn is defined or does exits
// 		expect(ValidateUser(validUser)).toBeDefined();
// 	});
// });

// describe("Check if token exists", () => {
// 	it('fetches successfully data from an API', async () => {
// 		// jest assertion mocking the implementation/running 
// 		// of axios post method and that it returns the valid token
// 	    axios.post.mockImplementationOnce(resultToken);
//   	});
// });

// describe("Check if valid user", () => {
//     it("should return a token", async () => {
//     	// jest assertion that mocks the async fn 
//     	// to return a valid token
//     	axios.post.mockResolvedValue(mockToken);
//     });

//     it("user is valid", async () => {
//     	// same as above assertion, this implies that
//     	// the async fn is triggered/mocked and resolve
//     	// the result/s only once
//     	axios.post.mockResolvedValueOnce(validUser);
//     });	
// });

// describe("Check if invalid user", () => {
//     it("should not return a token", async () => {
//         // mocking the post fn implementation and
//         // asserts that 'Invalid user' text is returned
//       	axios.post.mockImplementation('Invalid user');
//     });

//     it("user is invalid", async () => {
//     	axios.post.mockImplementationOnce(invalidUser);
//     });
// });