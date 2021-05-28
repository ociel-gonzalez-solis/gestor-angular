import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/prroject';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project!: Project;
  public saveProject: any;
  public status!: string;
  public filesToUpload!: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploaadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = "Editar proyecto";
    this.url = Global.url;
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

  onSubmit(form: any) {
    this._projectService.updateProject(this.project).subscribe(
      res => {
        if (res.project) {
          // Subirt imagen
          if (this.filesToUpload) {
            this._uploaadService.makeFileRequest(Global.url + "upload-img/" + res.project._id, [], this.filesToUpload, 'img').then((result: any) => {
            this.saveProject = result.project;
            this.status = 'success';
            console.log(result);
            });
          } else {
            this.saveProject = res.project;
            this.status = 'success';
          }

        } else {
          this.status = 'failed';
        }
      },
      e => {
        console.log(<any>e);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    // console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
