import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public person_account() {
        alert(`переход в режим работы с аккаунтом`);
    }

    public light_mode() {
        alert(`режим "день"`);
    }

    public mode_night() {
        alert(`режим "день"`);
    }

    public me() {
        alert(`+375 29 616 40 88`);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
