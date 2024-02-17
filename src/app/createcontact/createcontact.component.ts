import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

    ngOnInit(): void { }

    contact:Contact=new Contact();

    constructor(private contactService:ContactService,
    private router:Router) { }

    onSubmit(){
      console.log(this.contact);
      this.saveContact();
    }
    saveContact(){
      this.contactService.createContact(this.contact).subscribe(
        data=>{
          console.log("SUCCESSFULL........");
          console.log(data);
          this.redirectToContactList();
        },
        error=>{
          console.log("FAILED........");
          console.log(error);
        }
      );
    }
    redirectToContactList(){
      this.router.navigate(['/contacts']);
    }

}
