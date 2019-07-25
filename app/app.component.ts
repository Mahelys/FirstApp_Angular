import { Component } from '@angular/core';
import {PostService} from './post.service';
export class AppModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
name: string;
email: string;
website: string;
hobbies: string[];
showHobbies: boolean;
posts: IPost[];

constructor(private postService: PostService)
{
  this.name = "Mahelys"
  this.email = "mahelys.espinosa23@gmail.com";
  this.website = "https://www.educaweb.com";
  this.hobbies = ['play guitar', 'learn','sing', 'watch dramas'];
  this.showHobbies = false;
  this.postService.getPosts().subscribe(posts=>{this.posts = posts; });
}

toggleHobbies()
{
   this.showHobbies = !this.showHobbies;
}

newHobby(hobby)
{
  this.hobbies.push(hobby.value);
  hobby.value = '';
  return true;
}

}

interface IPost
{
  id: String;
  title: string;
  body: string;

}
