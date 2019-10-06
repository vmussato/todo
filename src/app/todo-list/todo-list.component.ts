import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import { ListServiceService } from '../services/list-service.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private category:CategoryServiceService,
    private list:ListServiceService,
    private task:TaskService
    ) { }

  categories;
  lists;
  item;
  currentCategory;
  currentList;
  items;
  taskTitle;


  ngOnInit() {
    this.category.getCategories().subscribe(response => {
      this.categories = response['body'];
    });
  }

  showList(item) {
    this.list.getList(item.id).subscribe(response => {
      const items:any = response['body'];
      console.log(item);
      if(items.length > 0) {
        this.lists = response['body'];
        this.currentCategory = item.id;
      }
      
    });
  }

  showItems(list) {
    this.task.getTasks(this.currentCategory,list.id).subscribe(response => {
      const items:any = response['body'];

      if(items.length > 0) {
        this.items = response['body'];
        this.currentList = list.id;
      }
      
    })
  }

  addList() {
    this.list.addList(this.currentCategory,this.item).subscribe(response => {
      this.updateCurrentList(response['body']);
      this.clean();
    })
  }

  addTask() {
    this.task.addtask(this.currentCategory, this.currentList, this.taskTitle).subscribe(response=> {
      this.updateCurrentTasks(response['body']);
      this.clean();
    })
  }

  updateCurrentList(list) {
    this.lists.push(list);
  }

  updateCurrentTasks(item) {
    this.items.push(item)
  }

  restart() {
    this.lists = [];
    this.category.getCategories().subscribe(response => {
      this.categories = response['body'];
    });
  }

  clean() {
    this.taskTitle = '';
    this.item = '';
  }

}
