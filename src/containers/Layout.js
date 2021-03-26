import React , { Suspense }  from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Main from './Main'
import routes from '../routes'

export default function Layout() {
  return (
    <div>
      <Main>
        <Suspense fallback={
          <div>Loading...</div>
        }>
          <Switch>
            {routes.map((route, i) => {
              return (
                route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              )
            })}
          </Switch>
        </Suspense>
      </Main>
    </div>
  )
}
