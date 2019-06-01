import { CanActivate } from "@angular/router";

export class RouteGuard implements CanActivate
{
    canActivate()
    {//if any user successfully loged in then it will true else false.
    return false;
}
}