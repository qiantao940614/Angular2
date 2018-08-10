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

# 数据的双向绑定
    





