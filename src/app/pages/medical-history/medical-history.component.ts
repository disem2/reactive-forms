import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { toggleIllnessList } from './medical-history-data';
import { ToggleIllnessInterface } from './medical-history.interface';
import {NavigationService} from '../../services/navigation.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistoryForms: FormGroup;
  surgeries: FormArray;
  injuries: FormArray;

  public toggleList: ToggleIllnessInterface[];
  public maskDate = {
    guide: true,
    showMask : false,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };


  constructor(
    private fb: FormBuilder,
    private navService: NavigationService
  ) {
    this.toggleList = toggleIllnessList;
    this.createForm();
  }

  createForm() {
    this.surgeries = this.fb.array([this.createSurgeries()]);
    this.injuries = this.fb.array([this.createInjuries()]);

    this.medicalHistoryForms = this.fb.group({
      surgeries: this.surgeries,
      injuries: this.injuries,
      lastMedicalExam: this.fb.control(''),
      allergies: this.fb.control(''),
      arthritis: this.fb.control(''),
      autoimmuneDisease: this.fb.control(''),
      cancer: this.fb.control(''),
      diabetes: this.fb.control(''),
      headaches: this.fb.control(''),
      hepatitis: this.fb.control(''),
      highCholesterol: this.fb.control(''),
      heartDisease: this.fb.control(''),
      highBloodPressure: this.fb.control(''),
      hiv: this.fb.control(''),
      patientIsPregnant: this.fb.control(''),
      patientIsBreastfeeding: this.fb.control(''),
      thyroidDisease: this.fb.control(''),
      std: this.fb.control(''),
      otherMedicalConditions: this.fb.control('')
    });
  }

  createSurgeries(): FormGroup {
    return this.fb.group({
      surgeriesType: '',
      dateOfSurgery: ''
    });
  }

  createInjuries(): FormGroup {
    return this.fb.group({
      typeOfInjury: '',
      dateOfInjury: ''
    });
  }

  addSurgeries(): void {
    const arrayControl = this.medicalHistoryForms.get('surgeries') as FormArray;
    arrayControl.push(this.createSurgeries());
  }

  addInjuries(): void {
    const injuriesArrayControl = this.medicalHistoryForms.get('injuries') as FormArray;
    injuriesArrayControl.push(this.createInjuries());
  }

  deleteGroup(index: number, arr: string) {
    const control = this.medicalHistoryForms.get(arr) as FormArray;
    control.removeAt(index);
  }

  preparationAndDisplayFormData (url) {
    setTimeout(() => {
      const formData = this.medicalHistoryForms.value;
      if (this.validate(formData)) {
        console.log(formData, '#############');
        this.navService.goTo(url);
      } else {
        this.navService.openSnackBar('Form is not full!', 'Сontinue filling');
      }
    }, 1000);
  }

  ngOnInit() {
    this.navService.nextPageClick.subscribe((eventData) => {
      const { currentUrl, nextUrl } = eventData;
      if (!(currentUrl.match(/medical-history/))) {
        return;
      }
      this.preparationAndDisplayFormData(nextUrl);
      });

    this.navService.prevPageClick.subscribe((eventData) => {
      const { prevUrl, currentUrl } = eventData;
      if (!(currentUrl.match(/medical-history/))) {
        return;
      }
      this.preparationAndDisplayFormData(prevUrl);
    });

  }

  private validate(formData) {
    // return true;
    return Math.random() > 0.5;
  }
}
