import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Subscription from '../Subscription'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
const fakeuser = {
    name: 'Mr Pinky Perez',
    email : 'test@test',
    apiKey : '111111',
    subscription : 'free'
}
const plans = [{"name":"free","requests_per_day":250},{"name":"developer","requests_per_day":500},{"name":"enterprise","requests_per_day":1000}]

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

test('User Plan', async () => {
  server.use(
    rest.get('/api/users/me', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(fakeuser),
      )
    }),
    rest.get('/api/subscriptions', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(plans),
      )
    }),
  )

  const { container } = render(<Router><Subscription /></Router>)
  await waitFor(() => screen.getByText("Current"))
  expect(screen.getByText("Current")).toHaveTextContent("Current")
})

test('get plans', async () => {
  server.use(
    rest.get('/api/users/me', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(fakeuser),
        )
      }),
    rest.get('/api/subscriptions', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(plans),
      )
    }),
  )

  const { container } = render(<Router><Subscription /></Router>)
  await waitFor(() => screen.getByText("Current"),{timeout:'5000'})
  expect(screen.getAllByRole("card")).toHaveLength(3)
})
