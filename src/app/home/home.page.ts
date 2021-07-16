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
      itemName: 'Find a Job',
      itemDueDate: '08-31-21',
      itemPriority: 'high',
      itemCategory: 'Work',
    },
  ];

  //   to use a date pipe , dates must be DD/MM/YR or DD/MM/YYYY

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then((newTaskObj) => {
      this.todoList.push(newTaskObj.data);
    });

    return await modal.present();
  }

  deleteTask(index) {
    this.todoList.splice(index, 1);
  }
}
