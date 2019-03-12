import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routes} from './app.route';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {SwitcherComponent} from './Layout/switcher/switcher.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitleComponent} from './Layout/title/title.component';
import {HeaderComponent} from './Layout/header/header.component';
import {FooterComponent} from './Layout/footer/footer.component';
import {HTitleComponent} from './Layout/h-title/h-title.component';
import {RightViewComponent} from './Layout/right-view/right-view.component';
import {LeftViewComponent} from './Layout/left-view/left-view.component';
import {RouterModule, Routes} from '@angular/router';
import {Ex1Component} from './ex2/ex2.component';
import {LoadingSpinnerComponent} from './Layout/loading-spinner/loading-spinner.component';
import {L1Component} from './Alphabet/l1/l1.component';
import {Alphabet} from './chapter/alphabet.component';
import {Grammar} from './chapter/grammar.component';
import {Thematic} from './chapter/thematic.component';
import {Dialogue} from './chapter/dialogue.component';
import {Vocabulary} from './chapter/voc.component';
import {AlphabetL1Component} from './Alphabet/alphabet-l1/alphabet-l1.component';
import {PlayDirective} from './Alphabet/alphabet-l1/play.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import {DragScrollModule} from 'ngx-drag-scroll';
import {GetcountDirective} from './Alphabet/alphabet-l1/getcount.directive';
import {FooterMenuComponent} from './Layout/footer-menu/footer-menu.component';
import {GrammarNumberOfNounsComponent} from './Grammar/grammar-number-of-nouns/grammar-number-of-nouns.component';
import {ThematicListenRepeatComponent} from './Thematic/thematic-listen-repeat/thematic-listen-repeat.component';
import {PlayVidDirective} from './Thematic/thematic-listen-repeat/play-vid.directive';
import {DialogueLesComponent} from './Dialogue/dialogue-les/dialogue-les.component';
import {VocabularyComponent} from './vocabulary/vocabulary.component';
import {AlphabetListenRepeatComponent} from './Alphabet/alphabet-listen-repeat/alphabet-listen-repeat.component';
import {HttpClientModule} from '@angular/common/http';
import {data} from './data.service';
import {PlayAudioDirective} from './Alphabet/alphabet-l1/play-audio.directive';
import {NavigationComponent} from './Layout/navigation/navigation.component';
import {GrammarAuxilliaryVerbInPresentTenseComponent} from './Grammar/grammar-auxilliary-verb-in-present-tense/grammar-auxilliary-verb-in-present-tense.component';
import {GrammarPersonalPronounsComponent} from './Grammar/grammar-personal-pronouns/grammar-personal-pronouns.component';
import {AlphabetExercice5Component} from './Alphabet/alphabet-exercice-5/alphabet-exercice-5.component';
import {ThematicWordsAndGreetingsComponent} from './Thematic/thematic-words-and-greetings/thematic-words-and-greetings.component';
import {DialogueExercise3Component} from './Dialogue/dialogue-exercise-3/dialogue-exercise-3.component';
import {AlphabetExercise1Component} from './Alphabet/alphabet-exercise-1/alphabet-exercise-1.component';
import {AlphabetExercise2Component} from './Alphabet/alphabet-exercise-2/alphabet-exercise-2.component';
import {AlphabetExercise4Component} from './Alphabet/alphabet-exercise-4/alphabet-exercise-4.component';
import {AlphabetExercise7Component} from './Alphabet/alphabet-exercise-7/alphabet-exercise-7.component';
import {GrammarExercise2Component} from './Grammar/grammar-exercise-2/grammar-exercise-2.component';
import {ThematicWordsExercise3Component} from './Thematic/thematic-words-exercise-3/thematic-words-exercise-3.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragulaModule} from 'ng2-dragula';
import {DraggableTestComponent} from './draggable-test/draggable-test.component';
import {DialoguesExercise1Component} from './Dialogue/dialogues-exercise-1/dialogues-exercise-1.component';
import {AlphabetExercise6Component} from './Alphabet/alphabet-exercise-6/alphabet-exercise-6.component';
import {DialogueExercise2Component} from './Dialogue/dialogue-exercise-2/dialogue-exercise-2.component';
import {GrammarExercise1Component} from './Grammar/grammar-exercise-1/grammar-exercise-1.component';
import {GrammarExercise3Component} from './Grammar/grammar-exercise-3/grammar-exercise-3.component';
import {DialogueExercise4Component} from './Dialogue/dialogue-exercise-4/dialogue-exercise-4.component';
import {AlphabetExercise3Component} from './Alphabet/alphabet-exercise-3/alphabet-exercise-3.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { ResourcesComponent } from './resources/resources.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickDirective } from './notes/color-pick.directive';
import { TipsComponent } from './tips/tips.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { SpeechRecognizerService } from './web-speech/shared/services/speech-recognizer.service';
import { SpeechSynthesizerService } from './web-speech/shared/services/speech-synthesizer.service';
import { WebSpeechComponent } from './web-speech/web-speech.component';

@NgModule({
    declarations: [
        AppComponent,
        TipsComponent,
        SwitcherComponent,
        TitleComponent,
        HeaderComponent,
        FooterComponent,
        HTitleComponent,
        RightViewComponent,
        LeftViewComponent,
        Ex1Component,
        LoadingSpinnerComponent,
        L1Component,
        Alphabet,
        Grammar,
        Thematic,
        Dialogue,
        Vocabulary,
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
        NavigationComponent,
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
            radius : 40,
            space : -10,
            outerStrokeWidth : 10,
            innerStrokeWidth : 10,
            outerStrokeColor : "#008000",
            innerStrokeColor : "#e7e8ea",
            animationDuration : 1500,
            titleColor:"#ffffff",
            unitsColor:"#ffffff",
        }),
        HttpClientModule,
        HttpModule,
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
        DragulaModule.forRoot(),
        SharedModule,
        FormsModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    providers: [data,
        SpeechRecognizerService,
        SpeechSynthesizerService],
    bootstrap: [AppComponent],
  entryComponents: [TipsComponent]
})

export class AppModule {
}
