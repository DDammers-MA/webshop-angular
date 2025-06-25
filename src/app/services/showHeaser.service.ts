import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShowHeaderService { 

    private _showHeader = new BehaviorSubject<boolean>(true);
    showHeader$ = this._showHeader.asObservable();

    setShowHeader(show: boolean) {
        this._showHeader.next(show);
    }
}