import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projObservable: Observable<any[]> = new Observable();
  projectsBool : boolean = true;

  projectsForm : FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;

  constructor(private projectsService: ProjectsService, private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.projObservable = this.projectsService.getProjects();
  }

  openProjectDialog(modelRef:any, projectObj = null){
    this.initialForm(projectObj);
    this.modalService.open(modelRef);
  }

  initialForm(projectObj: any =null){
    if(projectObj === null){
      this.projectsForm = this.fb.group({
        projectsName: ["", Validators.required],
        projectsDescription: ["", Validators.required],
        projectsImageUrl: ["", Validators.required],
        projectsId: [null],
        addedOn: [],
      });
    }else{
      this.projectsForm = this.fb.group({
        projectsName: [projectObj.projectsName, Validators.required],
        projectsDescription: [projectObj.projectsDescription, Validators.required],
        projectsImageUrl: [projectObj.projectsImageUrl, Validators.required],
        projectsId: [projectObj.projectsId]
      });
    }
  }

  checkFileType(event:any){
    this.tempFile = event.target.file[0];
    if(
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ){
      //console.log("File Ok");
    }else{
      //console.log("File not OK")
      this.tempFile = null;
      // this.toast.show("only .png/.jpeg/.jpg file format accepted!");
    }
  }

}
