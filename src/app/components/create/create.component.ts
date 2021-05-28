import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/prroject';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
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
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2019, '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
    // Guardar datos basicos
    this._projectService.saveProject(this.project).subscribe(
      res => {
        // console.log(res);
        if (res.project) {
          // Subirt imagen
          this._uploaadService.makeFileRequest(Global.url +"upload-img/"+res.project._id, [], this.filesToUpload, 'img').then((result: any) => {
            this.status = 'success';
            this.saveProject = result.project;
            console.log(result);
            form.reset();
          });
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
