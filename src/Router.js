import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const INDEX_ROUTE = "/";

const routesConfig = [
    {
        exact: true,
        path: INDEX_ROUTE,
        component: lazy(() => import('./ui/pages/Home'))
    }
];

const renderRoutes = (routes) => {
    return (routes ? (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((route, i) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component;

                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        {route.routes
                                            ? renderRoutes(route.routes)
                                            : <Component {...props} />}
                                    </Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    ) : null);
};

function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;
