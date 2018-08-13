[TOC]

# 启动项目
- 1 安装[node.js](https://nodejs.org/en/download/)
- 2 全局安装Angular cli
``` npm install -g @angular/cli ```
- 3 配置项目
``` 
ng new 项目名 //创建新项目
npm install//安装Angular cli到已有项目，当前地址为项目根目录
```
- 4 启动服务器
``` ng serve --o ```

# 新建组件并使用
创建组件文件
``` ng generate component 组件名 ```

查看组件名,打开app/组件文件夹/*.component.html 
```
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
```

selector的便是元素选择器,在所需要的地方(html,jsp)添加元素选择器.就能显示成功
<app-heroes></app-heroes>

注:1若新建component需要app.model中declarations中添加当前组件
    2 若使用ngModel需要app.model中添加Form
    ```
    import { FormsModule } from '@angular/forms';
    ...
     imports: [
    BrowserModule,FormsModule
  ],
    ```


Angular js指令
*ngfor 遍历
``` <li *ngFor="let hero of heroes"> ```

# 主从组件
即需要与父组件之间进行数据的交互
从父组件中传给子组件(hero 元素)
父组件
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
子组件
import { Component, OnInit, Input } from '@angular/core';

@Input() hero: Hero;


# 发送request
- 1.创建Service
ng generate service 组件名
HeroService如下
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

}
```
修改component构造器
import { HeroService } from '../hero.service';
constructor(private heroService: HeroService) { }










