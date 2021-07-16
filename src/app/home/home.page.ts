import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '01-13-21',
      itemPriority: 'high',
      itemCategory: 'Work',
    },
    {
      itemName: 'Design',
      itemDueDate: '02-17-21',
      itemPriority: 'low',
      itemCategory: 'Work',
    },
    {
      itemName: 'Shopping',
      itemDueDate: '01-02-21',
      itemPriority: 'medium',
      itemCategory: 'Personal',
    },
    {
      itemName: 'Workout',
      itemDueDate: '01-22-2021',
      itemPriority: 'high',
      itemCategory: 'Personal',
    },
  ];

  //   to use a date pipe , dates must be DD/MM/YR or DD/MM/YYYY

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    return await modal.present();
  }
}
