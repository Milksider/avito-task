import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../../../../config/router';
import { CreateTaskModal } from '@/widgets/CreateTaskModal';
import { useSelector } from 'react-redux';
import { selectCreateIssueModalData } from '@/app/providers/store/slices/CreateIssueModalSlice/selectors';

export const AppRouter = () => {
    const { isOpen } = useSelector(selectCreateIssueModalData);

    return (
        <Suspense fallback="">
            <Routes>
                {
                    Object.values(routerConfig)
                        .map(({ element, path }) => (
                            <Route
                                key={path}
                                element={(
                                    <div className="page-wrapper">
                                        {element}
                                        {isOpen && <CreateTaskModal />}
                                    </div>
                                )}
                                path={path}
                            />
                        ))
                }
            </Routes>
        </Suspense>
    )
};
