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
import {SuccessGameModalComponent} from "../success-game-modal/success-game-modal.component";
import {UserStatistic} from "../domain/user_statistic";
import {UserStatisticServer} from "../services/user_statistic.service";
import {log10} from "chart.js/helpers";
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../auth/token-storage.service";


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
  username:string;
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
  time: any;
  clickTime = 2;
  userStat: UserStatistic = new UserStatistic();

  constructor(private tokenStorage: TokenStorageService, public dialogStart: MatDialog,private exerciseService: ExerciseService, private userService: UserService, private activateRoute: ActivatedRoute, service: ExerciseService, public dialog: MatDialog, private userStatService: UserStatisticServer, private statService: GeneralStatisticServer) {
    this.id = activateRoute.snapshot.params['id'];
    service.getById(this.id).subscribe(el => {
      this.exercise = el;
      this.masLetters = el.masOfSymbols.split("");
      this.clickTime = el.maxTimeKick;
    })
  }

  ngOnInit(): void {

    const dialogRef = this.dialogStart.open(SureStartGameModalComponent, {
      width: '460px',
      data: {}
    })
    dialogRef.afterClosed().subscribe(()=>this.time = setInterval(() => mainClass.errorProcess++, this.clickTime*1000));
    let mainClass = this;
    document.addEventListener('keydown', function (event) {
      if (event.key?.toLowerCase() == mainClass.masLetters[0]?.toLowerCase()) {
        clearInterval(mainClass.time);
        mainClass.time = setInterval(() => mainClass.errorProcess++, mainClass.clickTime*1000);
        mainClass.masLetters = mainClass.masLetters.slice(1, mainClass.masLetters.length)
        if (mainClass.masLetters.length == 0) {
          mainClass.username = mainClass.tokenStorage.getUsername();

          mainClass.userService.getUserByName(mainClass.username).subscribe(el => {
            mainClass.exerciseService.getById(mainClass.exercise.id).subscribe(elem => {
              mainClass.userStat.id_user = el.id;
              mainClass.userStat.errors = mainClass.errorProcess;
              mainClass.userStat.id_exercise = mainClass.exercise.id;
              mainClass.userStat.average_speed = mainClass.getRandomIntInclusive(1.0, 4.0);
              mainClass.userStat.exercise_time = elem.length * mainClass.userStat.average_speed;
              mainClass.userStatService.addUserStat(mainClass.userStat).subscribe();
              mainClass.statService.addStatistic(mainClass.id.toString(), false).subscribe();
            })
          })
          mainClass.statService.addStatistic(mainClass.id.toString(), true).subscribe();
          const dialogRef = mainClass.dialog.open(SuccessGameModalComponent, {
            width: '250px'
          })
          dialogRef.afterClosed().subscribe(() => window.location.reload());
        }
      } else {
        mainClass.errorProcess++;
      }
      if (mainClass.viewKeyboard) {
        if (event.key.toLowerCase() == '??') {
          mainClass.styleQ = true
          setTimeout(() => mainClass.styleQ = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleW = true
          setTimeout(() => mainClass.styleW = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleE = true
          setTimeout(() => mainClass.styleE = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleR = true
          setTimeout(() => mainClass.styleR = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleT = true
          setTimeout(() => mainClass.styleT = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleY = true
          setTimeout(() => mainClass.styleY = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleU = true
          setTimeout(() => mainClass.styleU = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleI = true
          setTimeout(() => mainClass.styleI = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleO = true
          setTimeout(() => mainClass.styleO = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleP = true
          setTimeout(() => mainClass.styleP = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleOO = true
          setTimeout(() => mainClass.styleOO = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.stylePP = true
          setTimeout(() => mainClass.stylePP = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleA = true
          setTimeout(() => mainClass.styleA = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleS = true
          setTimeout(() => mainClass.styleS = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleD = true
          setTimeout(() => mainClass.styleD = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleF = true
          setTimeout(() => mainClass.styleF = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleG = true
          setTimeout(() => mainClass.styleG = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleH = true
          setTimeout(() => mainClass.styleH = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleJ = true
          setTimeout(() => mainClass.styleJ = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleK = true
          setTimeout(() => mainClass.styleK = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleL = true
          setTimeout(() => mainClass.styleL = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleKK = true
          setTimeout(() => mainClass.styleKK = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleLL = true
          setTimeout(() => mainClass.styleLL = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleZ = true
          setTimeout(() => mainClass.styleZ = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleX = true
          setTimeout(() => mainClass.styleX = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleC = true
          setTimeout(() => mainClass.styleC = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleV = true
          setTimeout(() => mainClass.styleV = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleB = true
          setTimeout(() => mainClass.styleB = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleN = true
          setTimeout(() => mainClass.styleN = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleM = true
          setTimeout(() => mainClass.styleM = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleNN = true
          setTimeout(() => mainClass.styleNN = false, 150)
        } else if (event.key.toLowerCase() == '??') {
          mainClass.styleMM = true
          setTimeout(() => mainClass.styleMM = false, 150)
        } else if (event.key.toLowerCase() == ' ') {
          mainClass.styleSpace = true
          setTimeout(() => mainClass.styleSpace = false, 150)
        }
      }
    });
  }

  openCloseKeyboard(): boolean {
    document.getElementById('keyboard')?.blur()
    this.viewKeyboard = !this.viewKeyboard;
    return this.viewKeyboard;
  }

  message(){
      clearInterval(this.time);

      const dialogRef = this.dialog.open(ErrorExitGameModalComponent, {
        width: '250px'
      })
      this.errorProcess = 0;
      dialogRef.afterClosed().subscribe(() => window.location.reload());
  }

  getRandomIntInclusive(min: number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min) + min)*100)/100; //???????????????? ?? ?????????????? ????????????????????
  }
}
