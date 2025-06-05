import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../../../../config/router';

export const AppRouter = () => (
    <Suspense fallback="">
        <Routes>
            {
                Object.values(routerConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        path={path}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
