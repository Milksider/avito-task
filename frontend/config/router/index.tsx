import { RouteProps } from "react-router-dom"
import { IssuesPage } from '@/pages/IssuesPage';
import { BoardsPage } from '@/pages/BoardsPage';
import { BoardDetailPage } from '@/pages/BoardDetailPaage';

export enum AppRoutes {
  ISSUES = 'issues',
  BOARDS = 'boards',
  BOARD = 'board'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ISSUES]: "/issues",
  [AppRoutes.BOARDS]: "/boards",
  [AppRoutes.BOARD]: "/boards/:id",
}

// @ts-ignore
export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ISSUES]: {
    path: RoutePath[AppRoutes.ISSUES],
    element: <IssuesPage />
  },
  [AppRoutes.BOARDS]: {
    path: RoutePath[AppRoutes.BOARDS],
    element: <BoardsPage />
  },
  [AppRoutes.BOARD]: {
    path: RoutePath[AppRoutes.BOARD],
    element: <BoardDetailPage />
  },
}
