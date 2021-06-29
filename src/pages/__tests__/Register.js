import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Register from '../Register'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

const fakeuser = {
  name: 'Mr Pinky Perez',
  email : 'test@test',
  password : 'Test.123'
}

const server = setupServer()
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

test('fill in all data error', async () => {
  const { container } = render(<Router><Register /></Router>)
  const input = screen.getByLabelText(/name/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(input, { target : { value: fakeuser.name}})
  fireEvent.click(submitButton)
  const errMessage = "Fill in all the data"
  await waitFor(() => screen.getByText(errMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--error')).toHaveTextContent(errMessage)
})
test('agree to terms', async () => {
  const { container } = render(<Router><Register /></Router>)
  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/Email Address/i);
  const inputPassword = screen.getByLabelText("Password");
  const inputPassword2 = screen.getByLabelText(/Confirm/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(inputName, { target : { value: fakeuser.name}})
  fireEvent.change(inputEmail, { target : { value: fakeuser.email}})
  fireEvent.change(inputPassword, { target : { value: fakeuser.password}})
  fireEvent.change(inputPassword2, { target : { value: fakeuser.password}})
  fireEvent.click(submitButton)

  const errMessage = "You must agree to the terms and conditions"
  await waitFor(() => screen.getByText(errMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--error')).toHaveTextContent(errMessage)
})
test('password do not match', async () => {
  const { container } = render(<Router><Register /></Router>)
  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/Email Address/i);
  const inputPassword = screen.getByLabelText("Password");
  const inputPassword2 = screen.getByLabelText(/Confirm/i);
  const inputAgree = screen.getByLabelText(/agree/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(inputName, { target : { value: fakeuser.name}})
  fireEvent.change(inputEmail, { target : { value: fakeuser.email}})
  fireEvent.change(inputPassword, { target : { value: fakeuser.password}})
  fireEvent.change(inputPassword2, { target : { value: 'Test.123A'}})
  fireEvent.click(inputAgree)
  fireEvent.click(submitButton)

  const errMessage = "Passwords do not match"
  await waitFor(() => screen.getByText(errMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--error')).toHaveTextContent(errMessage)
})
test('email already in use', async () => {
  server.use(
    rest.post(`/api/auth`, (req, res, ctx) => {
      return res(
        ctx.status(405),
        ctx.json({
          errorMessage: `email duplicated`,
        }),
      )
    }),
  )

  const { container } = render(<Router><Register /></Router>)
  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/Email Address/i);
  const inputPassword = screen.getByLabelText("Password");
  const inputPassword2 = screen.getByLabelText(/Confirm/i);
  const inputAgree = screen.getByLabelText(/agree/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(inputName, { target : { value: fakeuser.name}})
  fireEvent.change(inputEmail, { target : { value: fakeuser.email}})
  fireEvent.change(inputPassword, { target : { value: fakeuser.password}})
  fireEvent.change(inputPassword2, { target : { value: fakeuser.password}})
  fireEvent.click(inputAgree)
  fireEvent.click(submitButton)

  const errMessage = "Email is already registered"
  await waitFor(() => screen.getByText(errMessage))
  expect(container.querySelector('.Toastify .Toastify__toast--warning')).toHaveTextContent(errMessage)
})
test('something went wrong', async () => {
  server.use(
    rest.post(`/api/auth`, (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: `error`,
        }),
      )
    }),
  )

  const { container } = render(<Router><Register /></Router>)
  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/Email Address/i);
  const inputPassword = screen.getByLabelText("Password");
  const inputPassword2 = screen.getByLabelText(/Confirm/i);
  const inputAgree = screen.getByLabelText(/agree/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(inputName, { target : { value: fakeuser.name}})
  fireEvent.change(inputEmail, { target : { value: fakeuser.email}})
  fireEvent.change(inputPassword, { target : { value: fakeuser.password}})
  fireEvent.change(inputPassword2, { target : { value: fakeuser.password}})
  fireEvent.click(inputAgree)
  fireEvent.click(submitButton)

  const errMessage = "Something went wrong"
  await waitFor(() => screen.getByText(errMessage))
  expect(container.querySelector('.Toastify .Toastify__toast--error')).toHaveTextContent(errMessage)
})
test('registration completed', async () => {
  server.use(
    rest.post(`/api/auth`, (req, res, ctx) => {
      cb()
      return res(
        ctx.status(200),
        ctx.json({
          message: `error`,
        }),
      )
    }),
  )

  const { container } = render(<Router><Register /></Router>)
  Register.redirectToCompleted = jest.fn()
  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/Email Address/i);
  const inputPassword = screen.getByLabelText("Password");
  const inputPassword2 = screen.getByLabelText(/Confirm/i);
  const inputAgree = screen.getByLabelText(/agree/i);
  const submitButton = container.querySelector('button')

  fireEvent.change(inputName, { target : { value: fakeuser.name}})
  fireEvent.change(inputEmail, { target : { value: fakeuser.email}})
  fireEvent.change(inputPassword, { target : { value: fakeuser.password}})
  fireEvent.change(inputPassword2, { target : { value: fakeuser.password}})
  fireEvent.click(inputAgree)
  fireEvent.click(submitButton)
  function cb(){
    expect(Register.redirectToCompleted).toHaveBeenCalledTimes(1);
  }
})