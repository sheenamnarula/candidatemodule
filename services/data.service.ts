import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
//  this service is used to pass the data between components
@Injectable()
export class Data {

    public storage: any;

    public constructor(private snackBar: MdSnackBar) { }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });

    }
}