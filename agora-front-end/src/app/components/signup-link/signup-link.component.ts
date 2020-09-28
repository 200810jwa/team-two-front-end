import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {User} from '../../models/User';

@Component({
  selector: 'app-signup-link',
  templateUrl: './signup-link.component.html',
  styleUrls: ['./signup-link.component.scss']
})
export class SignupLinkComponent implements OnInit {

  public email: string;
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  closeResult = '';

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit(): void {
  }

  async submitForm() {
    try{
      let user = await this.http.post<User>('http://ec2-3-134-94-196.us-east-2.compute.amazonaws.com:8085/Agora/user', {
        userName: this.username,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        password: this.password
      }
    ).toPromise();

      sessionStorage.setItem("currentUser", JSON.stringify(user));
      console.log(JSON.stringify(user));
    } catch(error) {
      console.log(error);
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
