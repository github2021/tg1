import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import * as _ from 'lodash'

import { DsuMap } from '../models/dsu-map.model';
import { Dsu } from '../models/dsu.model';
import { Site } from '../models/site.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formsObject: any = {}
  formsArray: FormGroup[] = []
  lastid: number = 0
  switchInputs: boolean
  dsus: any[]
  submitted: boolean

  @Input() title: string
  @Input() label1: string
  @Input() label2: string
  @Input() label3: string
  @Input() formType: string
  @Output() touched: EventEmitter < boolean > = new EventEmitter < boolean > ()

  constructor(
    private apiService: ApiService
  ) {}


  private formsObjectToArray(): void {
    this.formsArray = _.values(this.formsObject)
  }

  public containsAdditionalForms(): Boolean {
    return this.formsArray.length > 1 ? true : false
  }


  public createNewFormGroup(): FormGroup {


    return new FormGroup({
      control1: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      control2: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      control3: new FormControl(null,
        (this.formType == "site") ? [Validators.required] : [Validators.min(0)]
      ),
    });

  }


  public submitForm(formGroup: FormGroup): void {

    if (this.formType == "dsu") {
      var dsu: Dsu = { name: formGroup.value.control1, description: formGroup.value.control2, cert: formGroup.value.control3 }
      this.apiService.putDsu(dsu).subscribe()
    }
    if (this.formType == "site") {
      var site: Site = { name: formGroup.value.control1, description: formGroup.value.control2, dsuId: formGroup.value.control3 }
      this.apiService.putSite(site).subscribe()
    }

    formGroup.reset()
    this.submitted = true
    setTimeout(() => { this.touched.emit(false) }, 250)
    setTimeout(() => { this.submitted = false }, 3000)

  }

  public formTouched() {
    this.touched.emit(true)
  }


  public getDsus(): void {
    this.apiService.getDsus().subscribe((res: DsuMap) => {
      let dsus = []
      Object.keys(res).map(function(objectKey, index) { dsus.push(res[objectKey]) });
      this.dsus = dsus
    })
  }

  public addForm(): void {

    this.lastid++;
    let newForm = this.createNewFormGroup()
    newForm["_id"] = this.lastid
    this.formsObject[this.lastid] = newForm
    this.formsObjectToArray()

  }


  public removeThisForm(_id: number): void {

    delete this.formsObject[_id]
    this.formsObjectToArray()

  }


  public resetForms(): void {

    Object.keys(this.formsObject).forEach((key: string) => { if (key != "1") { delete this.formsObject[key] } })
    this.formsObjectToArray()

  }


  ngOnInit() {

    this.addForm();
    this.formsObjectToArray();
    if (this.formType == "site") {
      this.switchInputs = true;
      this.getDsus();
    }

  }



}
