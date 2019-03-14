import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';

import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routes} from './app.route';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitleComponent} from './Layout/title/title.component';
import {HeaderComponent} from './Layout/header/header.component';
import {FooterComponent} from './Layout/footer/footer.component';
import {RightViewComponent} from './Layout/right-view/right-view.component';
import {RouterModule, Routes} from '@angular/router';
import {Alphabet} from './Chapters/Alphabet/alphabet.component';
import {Grammar} from './Chapters/Grammar/grammar.component';
import {Thematic} from './Chapters/Thematic/thematic.component';
import {Dialogue} from './Chapters/Dialogue/dialogue.component';
import {AlphabetL1Component} from './Sections/Alphabet/alphabet-l1/alphabet-l1.component';
import {PlayDirective} from './Sections/Alphabet/alphabet-l1/play.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import {DragScrollModule} from 'ngx-drag-scroll';
import {GetcountDirective} from './Sections/Alphabet/alphabet-l1/getcount.directive';
import {FooterMenuComponent} from './Layout/footer-menu/footer-menu.component';
import {GrammarNumberOfNounsComponent} from './Sections/Grammar/grammar-number-of-nouns/grammar-number-of-nouns.component';
import {ThematicListenRepeatComponent} from './Sections/Thematic/thematic-listen-repeat/thematic-listen-repeat.component';
import {PlayVidDirective} from './Sections/Thematic/thematic-listen-repeat/play-vid.directive';
import {DialogueLesComponent} from './Sections/Dialogue/dialogue-les/dialogue-les.component';
import {VocabularyComponent} from './Sections/Vocabulary/vocabulary.component';
import {AlphabetListenRepeatComponent} from './Sections/Alphabet/alphabet-listen-repeat/alphabet-listen-repeat.component';
import {PlayAudioDirective} from './Sections/Alphabet/alphabet-l1/play-audio.directive';
import {GrammarAuxilliaryVerbInPresentTenseComponent} from './Sections/Grammar/grammar-auxilliary-verb-in-present-tense/grammar-auxilliary-verb-in-present-tense.component';
import {GrammarPersonalPronounsComponent} from './Sections/Grammar/grammar-personal-pronouns/grammar-personal-pronouns.component';
import {AlphabetExercice5Component} from './Sections/Alphabet/alphabet-exercise-5/alphabet-exercice-5.component';
import {ThematicWordsAndGreetingsComponent} from './Sections/Thematic/thematic-words-and-greetings/thematic-words-and-greetings.component';
import {DialogueExercise3Component} from './Sections/Dialogue/dialogue-exercise-3/dialogue-exercise-3.component';
import {AlphabetExercise1Component} from './Sections/Alphabet/alphabet-exercise-1/alphabet-exercise-1.component';
import {AlphabetExercise2Component} from './Sections/Alphabet/alphabet-exercise-2/alphabet-exercise-2.component';
import {AlphabetExercise4Component} from './Sections/Alphabet/alphabet-exercise-4/alphabet-exercise-4.component';
import {AlphabetExercise7Component} from './Sections/Alphabet/alphabet-exercise-7/alphabet-exercise-7.component';
import {GrammarExercise2Component} from './Sections/Grammar/grammar-exercise-2/grammar-exercise-2.component';
import {ThematicWordsExercise3Component} from './Sections/Thematic/thematic-words-exercise-3/thematic-words-exercise-3.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragulaModule} from 'ng2-dragula';
import {DraggableTestComponent} from './Sections/Thematic/draggable-test/draggable-test.component';
import {DialoguesExercise1Component} from './Sections/Dialogue/dialogues-exercise-1/dialogues-exercise-1.component';
import {AlphabetExercise6Component} from './Sections/Alphabet/alphabet-exercise-6/alphabet-exercise-6.component';
import {DialogueExercise2Component} from './Sections/Dialogue/dialogue-exercise-2/dialogue-exercise-2.component';
import {GrammarExercise1Component} from './Sections/Grammar/grammar-exercise-1/grammar-exercise-1.component';
import {GrammarExercise3Component} from './Sections/Grammar/grammar-exercise-3/grammar-exercise-3.component';
import {DialogueExercise4Component} from './Sections/Dialogue/dialogue-exercise-4/dialogue-exercise-4.component';
import {AlphabetExercise3Component} from './Sections/Alphabet/alphabet-exercise-3/alphabet-exercise-3.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ResourcesComponent} from './Sections/Resources/resources.component';
import {NotesComponent} from './shared/notes/notes.component';
import {ColorPickDirective} from './shared/notes/color-pick.directive';
import {TipsComponent} from './shared/tips/tips.component';
import {WebSpeechComponent} from './Sections/Alphabet/web-speech/web-speech.component';
import {SwitcherComponent} from './Layout/switcher/switcher.component';

import {SpeechRecognizerService} from './Sections/Alphabet/web-speech/shared/services/speech-recognizer.service';
import {SpeechSynthesizerService} from './Sections/Alphabet/web-speech/shared/services/speech-synthesizer.service';
import {Data} from './shared/data.service';


@NgModule({
  declarations: [
    Alphabet,
    Grammar,
    Thematic,
    Dialogue,
    AppComponent,
    TipsComponent,
    SwitcherComponent,
    TitleComponent,
    HeaderComponent,
    FooterComponent,
    RightViewComponent,
    AlphabetL1Component,
    PlayDirective,
    GetcountDirective,
    FooterMenuComponent,
    GrammarNumberOfNounsComponent,
    ThematicListenRepeatComponent,
    PlayVidDirective,
    DialogueLesComponent,
    VocabularyComponent,
    AlphabetListenRepeatComponent,
    PlayAudioDirective,
    GrammarAuxilliaryVerbInPresentTenseComponent,
    GrammarPersonalPronounsComponent,
    AlphabetExercice5Component,
    ThematicWordsAndGreetingsComponent,
    DialogueExercise3Component,
    AlphabetExercise1Component,
    AlphabetExercise2Component,
    AlphabetExercise4Component,
    AlphabetExercise7Component,
    GrammarExercise2Component,
    ThematicWordsExercise3Component,
    DraggableTestComponent,
    DialoguesExercise1Component,
    AlphabetExercise6Component,
    DialogueExercise2Component,
    GrammarExercise1Component,
    GrammarExercise3Component,
    DialogueExercise4Component,
    AlphabetExercise3Component,
    ResourcesComponent,
    NotesComponent,
    ColorPickDirective,
    WebSpeechComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 40,
      space: -10,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: '#008000',
      innerStrokeColor: '#e7e8ea',
      animationDuration: 1500,
      titleColor: '#ffffff',
      unitsColor: '#ffffff',
    }),
    HttpClientModule,
    MaterialModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    NgbModule,
    NgxPaginationModule,
    DragScrollModule,
    OverlayModule,
    SharedModule,
    FormsModule,
    DragulaModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [Data,
    SpeechRecognizerService,
    SpeechSynthesizerService],
  bootstrap: [AppComponent],
  entryComponents: [TipsComponent]
})

export class AppModule {
}
