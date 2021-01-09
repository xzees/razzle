export type RouteConfig = {
  path: string,
  displayPath?: string,
  label?: string,
  absolutePath?: string,
  exact?: boolean,
  component: any,
  showInNavigationBar?: boolean
};