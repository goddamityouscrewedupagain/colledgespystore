import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/index';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class alertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}