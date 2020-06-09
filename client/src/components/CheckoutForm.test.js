import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // render the component
    render (<CheckoutForm />);
    // query for the formheader
    const formHeader = screen.getByText(/checkout form/i)
    // make assertion
    expect(formHeader).toBeInTheDocument()
})

test("form shows success message on submit with form details", () => {
    // render the component
    render (<CheckoutForm />);
    // Fill out the form
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city= screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zipCode = screen.getByLabelText(/zip:/i)

    fireEvent.change(firstName, {target: {value: 'Kyle'}})
    fireEvent.change(lastName, {target: {value: 'Kyle'}})
    fireEvent.change(address, {target: {value: 'Kyle'}})
    fireEvent.change(city, {target: {value: 'Kyle'}})
    fireEvent.change(state, {target: {value: 'Kyle'}})
    fireEvent.change(zipCode, {target: {value: 'Kyle'}})

    const submitButton = screen.getByTestId(/checkout/i)
    // Submit the details
    fireEvent.click(submitButton)
    // Query for the success message
    const successMessage = screen.getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument();
    // Assertions

});
