import { MainComponent } from './components/main/main.component';
import { LoginComponent } from "./components/login/login.component";


export const AppRoutes = [
  {
    path: '',
    component: MainComponent
  },
  { path: "login/:login",
    component: LoginComponent
  },
];
