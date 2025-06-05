import { RouteProps } from "react-router-dom"
import { IssuesPage } from '@/pages/IssuesPage';

export enum AppRoutes {
  ISSUES = 'issues',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ISSUES]: "/issues",
}

// @ts-ignore
export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ISSUES]: {
    path: RoutePath[AppRoutes.ISSUES],
    element: <IssuesPage />
  },
}
