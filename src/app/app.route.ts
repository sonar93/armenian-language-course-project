import { Routes } from '@angular/router';
import { RightViewComponent } from './Layout/right-view/right-view.component';
import { Alphabet } from './Chapters/Alphabet/alphabet.component';
import { Grammar } from './Chapters/Grammar/grammar.component';
import { Thematic } from './Chapters/Thematic/thematic.component';
import { Dialogue } from './Chapters/Dialogue/dialogue.component';
import { ResourcesComponent } from './Sections/Resources/resources.component';
import { AlphabetL1Component } from './Sections/Alphabet/alphabet-l1/alphabet-l1.component';
import { GrammarNumberOfNounsComponent } from './Sections/Grammar/grammar-number-of-nouns/grammar-number-of-nouns.component';
import { ThematicListenRepeatComponent } from './Sections/Thematic/thematic-listen-repeat/thematic-listen-repeat.component';
import { DialogueLesComponent } from './Sections/Dialogue/dialogue-les/dialogue-les.component';
import { VocabularyComponent } from './Sections/Vocabulary/vocabulary.component';
import { AlphabetListenRepeatComponent } from './Sections/Alphabet/alphabet-listen-repeat/alphabet-listen-repeat.component';
import { GrammarAuxilliaryVerbInPresentTenseComponent } from './Sections/Grammar/grammar-auxilliary-verb-in-present-tense/grammar-auxilliary-verb-in-present-tense.component';
import { GrammarPersonalPronounsComponent } from './Sections/Grammar/grammar-personal-pronouns/grammar-personal-pronouns.component';
import { AlphabetExercice5Component } from './Sections/Alphabet/alphabet-exercise-5/alphabet-exercice-5.component';
import { ThematicWordsAndGreetingsComponent } from './Sections/Thematic/thematic-words-and-greetings/thematic-words-and-greetings.component';
import { DialogueExercise3Component } from './Sections/Dialogue/dialogue-exercise-3/dialogue-exercise-3.component';
import { AlphabetExercise1Component } from './Sections/Alphabet/alphabet-exercise-1/alphabet-exercise-1.component';
import { AlphabetExercise2Component } from './Sections/Alphabet/alphabet-exercise-2/alphabet-exercise-2.component';
import { AlphabetExercise4Component } from './Sections/Alphabet/alphabet-exercise-4/alphabet-exercise-4.component';
import { GrammarExercise3Component } from './Sections/Grammar/grammar-exercise-3/grammar-exercise-3.component';
import { GrammarExercise2Component } from './Sections/Grammar/grammar-exercise-2/grammar-exercise-2.component';
import { GrammarExercise1Component } from './Sections/Grammar/grammar-exercise-1/grammar-exercise-1.component';
import { AlphabetExercise7Component } from './Sections/Alphabet/alphabet-exercise-7/alphabet-exercise-7.component';
import { ThematicWordsExercise3Component } from './Sections/Thematic/thematic-words-exercise-3/thematic-words-exercise-3.component';
import { DraggableTestComponent } from './Sections/Thematic/draggable-test/draggable-test.component';
import { DialoguesExercise1Component } from './Sections/Dialogue/dialogues-exercise-1/dialogues-exercise-1.component';
import { AlphabetExercise6Component } from './Sections/Alphabet/alphabet-exercise-6/alphabet-exercise-6.component';
import { DialogueExercise2Component } from './Sections/Dialogue/dialogue-exercise-2/dialogue-exercise-2.component';
import { DialogueExercise4Component } from './Sections/Dialogue/dialogue-exercise-4/dialogue-exercise-4.component';
import { AlphabetExercise3Component } from './Sections/Alphabet/alphabet-exercise-3/alphabet-exercise-3.component';
import { WebSpeechComponent } from './Sections/Alphabet/web-speech/web-speech.component';

export const routes: Routes = [
  { path: '', component: RightViewComponent, data: { depth: 1 }, pathMatch: 'full' },
  {
    path: 'Chapters/Alphabet', data: { depth: 2 },
    children: [
      { path: '', component: Alphabet, pathMatch: 'full' },
      { path: 'Sound-Letter-Word', component: AlphabetL1Component, data: { depth: 3 } },
      { path: 'Listen-and-Repeat', component: AlphabetListenRepeatComponent, data: { depth: 3 } },
      { path: 'web-speech', component: WebSpeechComponent, data: { depth: 3 } },
      { path: 'Exercise-1', component: AlphabetExercise1Component, data: { depth: 3 } },
      { path: 'Exercise-2', component: AlphabetExercise2Component, data: { depth: 3 } },
      { path: 'Exercise-3', component: AlphabetExercise3Component, data: { depth: 3 } },
      { path: 'Exercise-4', component: AlphabetExercise4Component, data: { depth: 3 } },
      { path: 'Exercise-5', component: AlphabetExercice5Component, data: { depth: 3 } },
      { path: 'Exercise-6', component: AlphabetExercise6Component, data: { depth: 3 } },
      { path: 'Exercise-7', component: AlphabetExercise7Component, data: { depth: 3 } },
    ]
  },
  {
    path: 'Chapters/Grammar', data: { depth: 6 },
    children: [
      { path: '', component: Grammar, pathMatch: 'full' },
      { path: 'Auxiliary-Verb-in-Present-Tense', component: GrammarAuxilliaryVerbInPresentTenseComponent, data: { depth: 3 } },
      { path: 'Personal-Pronouns', component: GrammarPersonalPronounsComponent, data: { depth: 3 } },
      { path: 'Pronoun-and-Auxiliary-Verb-in-use', component: GrammarNumberOfNounsComponent, data: { depth: 3 } },
      { path: 'Exercise-1', component: GrammarExercise1Component, data: { depth: 3 } },
      { path: 'Exercise-2', component: GrammarExercise2Component, data: { depth: 3 } },
      { path: 'Exercise-3', component: GrammarExercise3Component, data: { depth: 3 } },
    ]
  },
  {
    path: 'Chapters/Thematic', data: { depth: 4 },
    children: [
      { path: '', component: Thematic, pathMatch: 'full' },
      { path: 'Thematic-Words-and-Greetings', component: ThematicWordsAndGreetingsComponent, data: { depth: 3 } },
      { path: 'Listen-and-Repeat', component: ThematicListenRepeatComponent, data: { depth: 3 } },
      { path: 'Exercise-2', component: DraggableTestComponent, data: { depth: 3 } },
      { path: 'Exercise-3', component: ThematicWordsExercise3Component, data: { depth: 3 } },
    ]
  },
  {
    path: 'Chapters/Dialogue', data: { depth: 5 },
    children: [
      { path: '', component: Dialogue, pathMatch: 'full' },
      { path: 'Dialogue', component: DialogueLesComponent, data: { depth: 3 } },
      { path: 'Exercise-1', component: DialoguesExercise1Component, data: { depth: 3 } },
      { path: 'Exercise-2', component: DialogueExercise2Component, data: { depth: 3 } },
      { path: 'Exercise-3', component: DialogueExercise3Component, data: { depth: 3 } },
      { path: 'Exercise-4', component: DialogueExercise4Component, data: { depth: 3 } },
    ]
  },
  { path: 'Vocabulary', component: VocabularyComponent, data: { depth: 6 }, },
  { path: 'Resources', component: ResourcesComponent, data: { depth: 1 } },
];
