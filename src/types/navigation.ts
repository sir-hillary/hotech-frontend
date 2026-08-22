
export interface NavChild {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface NavRoute {
  id: string;
  label: string;
  path: string;
  type: "route";
}

export interface NavDropdown {
  id: string;
  label: string;
  type: "dropdown";
  children: NavChild[];
}

export type NavItem = NavRoute | NavDropdown;