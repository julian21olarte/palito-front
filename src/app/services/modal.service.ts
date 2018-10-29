import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: Array<any>;
  constructor() {
    this.modals = [];
  }

  public registerModal(modalId: String) {
    const subjectModal = {id: modalId, subject: new Subject()};
    this.modals.push(subjectModal);
    return subjectModal.subject.asObservable();
  }

  public openModal(modalId: String) {
    console.log(this.modals);
    const modal = this.modals.find(data => data.id === modalId);
    this.showModal(modal.subject as Subject<any>);
  }

  private showModal(modal: Subject<any>) {
    modal.next(true);
  }
}
