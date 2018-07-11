import { Component, OnInit } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { layoutRoutes } from '../../../layout/layout-routing.module';

@Component({
  selector: 'shop-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  routes: Array<RouteInfo>;
  constructor() {}

  ngOnInit() {
    this.routes = this.resolveRoutes(layoutRoutes[0].children);
    console.log(this.routes);
  }

  private resolveRoutes(routes) {
    return routes.map((childRoute: Route) => {
      const path = `/${childRoute.path}`;
      const routeString = childRoute.component.toString();
      const name = routeString.slice(0, routeString.indexOf('Component')).split(' ')[1];
      return { path, name };
    });
  }
}

export interface RouteInfo {
  path: string;
  name: string;
}
