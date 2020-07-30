import { Component } from '@angular/core';
import { IFlash } from './flash/flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'flash-cards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'flash-cards';
  editing = false;
  editingId: number;

  flashs: IFlash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  }, {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
  }, {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
  }];

  trackByFlashId( index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number) {
    let fooId = 0;
    this.flashs.forEach(element => {
      if (element.id == id) {
        fooId = element.id;
      }
    });
    // Revisar porque esto está mal
    //const flashId = this.flashs.indexOf(flash => flash.id === id);
    const flashId = fooId;
    this.flashs.splice(flashId, 1)
  }
  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    // TODO: We will add editing logic after adding the form
  }
  handleRememeberedChange({ id, flag }) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.remembered = flag;
  }
}
