import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/prroject';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project!: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
    }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getPoject(id);
    });
  }

  getPoject(id: any) {
    this._projectService.getProject(id).subscribe(
      res => {
        this.project = res.project;
        console.log(res);
      },
      e => {
        console.log(<any>e);
      }
    );
  }

  setConfirm(confirm: any) {
    this.confirm = confirm;
  }

  deleteProject(id: any) {
    this._projectService.deleteProject(id).subscribe(
      res => {
        if (res.project) {
          this._router.navigate(['/projects']);
        }
      },
      e => {
        console.log(<any>e);
      });
  }
}
