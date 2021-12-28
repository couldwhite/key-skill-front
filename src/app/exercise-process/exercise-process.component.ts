import {Component, Injectable, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ExerciseService} from "../services/exercise.service";
import {ActivatedRoute} from "@angular/router";
import {Exercise} from "../domain/exercise";
import {MatDialog} from "@angular/material/dialog";
import {ErrorExitGameModalComponent} from "../error-exit-game-modal/error-exit-game-modal.component";
import {GeneralStatisticServer} from "../services/general_statistic.server";
import {UserCardModalComponent} from "../user-card-modal/user-card-modal.component";
import {SureStartGameModalComponent} from "../sure-start-game-modal/sure-start-game-modal.component";


@Component({
  selector: 'app-exercise-process',
  animations: [
    trigger('moving_letters', [
      state('start', style({
        display: 'flex',
        justifyContent: 'left',
      })),
      state('end', style({
        display: 'flex',
        justifyContent: 'left '
      })),
      transition('start=>end', [
        animate(1500)
      ])
    ])
  ],
  templateUrl: './exercise-process.component.html',
  styleUrls: ['./exercise-process.component.scss'],
})
@Injectable({providedIn: 'root'})
export class ExerciseProcessComponent implements OnInit {

  stateOfLetter: string = 'start';
  id: number;
  exercise: Exercise;
  masLetters: string[] = [];
  errorProcess = 0;
  viewKeyboard = false;
  styleQQ = false;
  styleQ = false;
  styleW = false;
  styleE = false;
  styleR = false;
  styleT = false;
  styleY = false;
  styleU = false;
  styleI = false;
  styleO = false;
  styleP = false;
  styleOO = false;
  stylePP = false;
  styleA = false;
  styleS = false;
  styleD = false;
  styleF = false;
  styleG = false;
  styleH = false;
  styleJ = false;
  styleK = false;
  styleL = false;
  styleKK = false;
  styleLL = false;
  styleZ = false;
  styleX = false;
  styleC = false;
  styleV = false;
  styleB = false;
  styleN = false;
  styleM = false;
  styleNN = false;
  styleMM = false;
  styleSpace = false;

  constructor(public dialogStart: MatDialog, private activateRoute: ActivatedRoute, service: ExerciseService, public dialog: MatDialog, private statService: GeneralStatisticServer) {
    this.id = activateRoute.snapshot.params['id'];
    service.getById(this.id).subscribe(el => {
      this.exercise = el;
      this.masLetters = el.masOfSymbols.split("");
    })
  }

  ngOnInit(): void {

    const dialogRef = this.dialogStart.open(SureStartGameModalComponent, {
      width: '460px',
      data: {}
    })
    dialogRef.afterClosed().subscribe();
    let mainClass = this;
    document.addEventListener('keydown', function (event) {
      if (event.key?.toLowerCase() == mainClass.masLetters[0]?.toLowerCase()) {
        mainClass.masLetters = mainClass.masLetters.slice(1, mainClass.masLetters.length)
        if (mainClass.masLetters.length==0){
          mainClass.statService.addStatistic(mainClass.id.toString(), true).subscribe();
        }
      } else {
        mainClass.errorProcess++;
        console.log(mainClass.errorProcess)
        if (mainClass.errorProcess == mainClass.exercise.maxErrors) {
          mainClass.statService.addStatistic(mainClass.id.toString(), false).subscribe();
          const dialogRef = mainClass.dialog.open(ErrorExitGameModalComponent, {
            width: '250px'
          })
          dialogRef.afterClosed().subscribe(()=>window.location.reload());
        }
      }
      if (mainClass.viewKeyboard){
        if (event.key.toLowerCase()=='й'){
          mainClass.styleQ=true
          setTimeout(()=>mainClass.styleQ = false, 150)
        }
        else if (event.key.toLowerCase()=='ц'){
          mainClass.styleW=true
          setTimeout(()=>mainClass.styleW = false, 150)
        }
        else if (event.key.toLowerCase()=='у'){
          mainClass.styleE=true
          setTimeout(()=>mainClass.styleE = false, 150)
        }
        else if (event.key.toLowerCase()=='к'){
          mainClass.styleR=true
          setTimeout(()=>mainClass.styleR = false, 150)
        }
        else if (event.key.toLowerCase()=='е'){
          mainClass.styleT=true
          setTimeout(()=>mainClass.styleT = false, 150)
        }
        else if (event.key.toLowerCase()=='н'){
          mainClass.styleY=true
          setTimeout(()=>mainClass.styleY = false, 150)
        }
        else if (event.key.toLowerCase()=='г'){
          mainClass.styleU=true
          setTimeout(()=>mainClass.styleU = false, 150)
        }
        else if (event.key.toLowerCase()=='ш'){
          mainClass.styleI=true
          setTimeout(()=>mainClass.styleI = false, 150)
        }
        else if (event.key.toLowerCase()=='щ'){
          mainClass.styleO=true
          setTimeout(()=>mainClass.styleO = false, 150)
        }
        else if (event.key.toLowerCase()=='з'){
          mainClass.styleP=true
          setTimeout(()=>mainClass.styleP = false, 150)
        }
        else if (event.key.toLowerCase()=='х'){
          mainClass.styleOO=true
          setTimeout(()=>mainClass.styleOO = false, 150)
        }
        else if (event.key.toLowerCase()=='ъ'){
          mainClass.stylePP=true
          setTimeout(()=>mainClass.stylePP = false, 150)
        }
        else if (event.key.toLowerCase()=='ф'){
          mainClass.styleA=true
          setTimeout(()=>mainClass.styleA = false, 150)
        }
        else if (event.key.toLowerCase()=='ы'){
          mainClass.styleS=true
          setTimeout(()=>mainClass.styleS = false, 150)
        }
        else if (event.key.toLowerCase()=='в'){
          mainClass.styleD=true
          setTimeout(()=>mainClass.styleD = false, 150)
        }
        else if (event.key.toLowerCase()=='а'){
          mainClass.styleF=true
          setTimeout(()=>mainClass.styleF = false, 150)
        }
        else if (event.key.toLowerCase()=='п'){
          mainClass.styleG=true
          setTimeout(()=>mainClass.styleG = false, 150)
        }
        else if (event.key.toLowerCase()=='р'){
          mainClass.styleH=true
          setTimeout(()=>mainClass.styleH = false, 150)
        }
        else if (event.key.toLowerCase()=='о'){
          mainClass.styleJ=true
          setTimeout(()=>mainClass.styleJ = false, 150)
        }
        else if (event.key.toLowerCase()=='л'){
          mainClass.styleK=true
          setTimeout(()=>mainClass.styleK = false, 150)
        }
        else if (event.key.toLowerCase()=='д'){
          mainClass.styleL=true
          setTimeout(()=>mainClass.styleL = false, 150)
        }
        else if (event.key.toLowerCase()=='ж'){
          mainClass.styleKK=true
          setTimeout(()=>mainClass.styleKK = false, 150)
        }
        else if (event.key.toLowerCase()=='э'){
          mainClass.styleLL=true
          setTimeout(()=>mainClass.styleLL = false, 150)
        }
        else if (event.key.toLowerCase()=='я'){
          mainClass.styleZ=true
          setTimeout(()=>mainClass.styleZ = false, 150)
        }
        else if (event.key.toLowerCase()=='ч'){
          mainClass.styleX=true
          setTimeout(()=>mainClass.styleX = false, 150)
        }
        else if (event.key.toLowerCase()=='с'){
          mainClass.styleC=true
          setTimeout(()=>mainClass.styleC = false, 150)
        }
        else if (event.key.toLowerCase()=='м'){
          mainClass.styleV=true
          setTimeout(()=>mainClass.styleV = false, 150)
        }
        else if (event.key.toLowerCase()=='и'){
          mainClass.styleB=true
          setTimeout(()=>mainClass.styleB = false, 150)
        }
        else if (event.key.toLowerCase()=='т'){
          mainClass.styleN=true
          setTimeout(()=>mainClass.styleN = false, 150)
        }
        else if (event.key.toLowerCase()=='ь'){
          mainClass.styleM=true
          setTimeout(()=>mainClass.styleM = false, 150)
        }
        else if (event.key.toLowerCase()=='б'){
          mainClass.styleNN=true
          setTimeout(()=>mainClass.styleNN = false, 150)
        }
        else if (event.key.toLowerCase()=='ю'){
          mainClass.styleMM=true
          setTimeout(()=>mainClass.styleMM = false, 150)
        }
        else if (event.key.toLowerCase()==' '){
          mainClass.styleSpace=true
          setTimeout(()=>mainClass.styleSpace = false, 150)
        }
      }
    });
  }

  openCloseKeyboard(): boolean{
    document.getElementById('keyboard')?.blur()
    this.viewKeyboard = !this.viewKeyboard;
    return this.viewKeyboard;
  }

}
