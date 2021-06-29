import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Dashboard from '../Dashboard'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

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

test('user information', async () => {
    const fakeuser = {
        name: 'Mr Pinky Perez',
        email : 'test@test',
        apiKey : '111111',
        subscription : 'free'
    }
  server.use(
    rest.get('/api/users/me', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(fakeuser),
      )
    }),
  )

  const { container } = render(<Router><Dashboard /></Router>)
  await waitFor(() => screen.getByText(fakeuser.name))
  expect(screen.getByText(fakeuser.apiKey)).toHaveTextContent(fakeuser.apiKey)
})

test('delete account', async () => {
    global.confirm = () => true;
    server.use(
        rest.delete('/api/users', (req, res, ctx) => {
            cb()
        return res(
            ctx.status(200),
            ctx.json({
                message: `error`,
            }),
        )
        }),
    )

  render(<Router><Dashboard /></Router>)
  Dashboard.redirectToLogin = jest.fn()
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton)

  function cb(){
    expect(Dashboard.redirectToLogin).toHaveBeenCalledTimes(1);
  }
})

test('Delete account error', async () => {
  server.use(
    rest.delete('/api/users', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(fakeuser),
      )
    }),
  )

  const { container } = render(<Router><Dashboard /></Router>)

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton)

  const errMessage = "There was an error removing the selected user. Please try again."
  await waitFor(() => screen.getByText(errMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--error')).toHaveTextContent(errMessage)
})

test('Regenerate key', async () => {
    const fakeuser = {
        name: 'Mr Pinky Perez',
        email : 'test@test',
        apiKey : '111111',
        subscription : 'free'
    }
  server.use(
    rest.get('/api/users/me', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(fakeuser),
        )
      }),
    rest.get('/api/users/generateApi', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
            apiKey: '11112',
        }),
      )
    }),
  )

  const { container } = render(<Router><Dashboard /></Router>)
  global.confirm = () => true;
  const regenerateButton = screen.getByText(/Regenerate/i);
  fireEvent.click(regenerateButton)

  const responseMessage = 'Your API Key has been updated.'
  await waitFor(() => screen.getByText(responseMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--success')).toHaveTextContent(responseMessage)
})
test('Regenerate key error', async () => {
    const fakeuser = {
        name: 'Mr Pinky Perez',
        email : 'test@test',
        apiKey : '111111',
        subscription : 'free'
    }
  server.use(
    rest.get('/api/users/me', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(fakeuser),
        )
      }),
    rest.get('/api/users/generateApi', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
            apiKey: '11112',
        }),
      )
    }),
  )

  const { container } = render(<Router><Dashboard /></Router>)
  global.confirm = () => true;
  const regenerateButton = screen.getByText(/Regenerate/i);
  fireEvent.click(regenerateButton)

  const responseMessage = 'Your API Key has been updated.'
  await waitFor(() => screen.getByText(responseMessage))

  expect(container.querySelector('.Toastify .Toastify__toast--success')).toHaveTextContent(responseMessage)
  expect(screen.getByText('11112')).toHaveTextContent('11112')
})