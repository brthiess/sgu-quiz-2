<template>
    <div data-quiz-container class="quiz-container-container">
        <section class="quiz-template" v-bind:class="{'active': active}">
            <div class="quiz-container">
                <div v-for="(section, index) in sections" :key="'section-'+index" class="quiz-section-container" v-bind:class="{'quiz-results-container-wrapper' : section.sectionType == 'results', 'active-question' : section.active, 'upcoming' : section.isUpcoming, 'preceding' : section.isPreceding, 'section-unanswered' : !section.answered, 'section-answered' : section.answered, 'section-answered-correctly' : section.answered && section.answeredCorrectly, 'section-answered-incorrectly' : section.answered && !section.answeredCorrectly}">
                    <section v-if="section.sectionType != 'results'" class="quiz-inner-container">
                        <h3 class="quiz-question-type-text">Multiple Choice Question</h3>
                        <div class="quiz-date-number-container">
                            <p class="quiz-episode-number">Episode: #{{section.episodeNumber}}</p>
                            <p class="quiz-question-date">, {{section.date}}</p>

                        </div>
                        <div class="quiz-question-container">
                            <h3 class="quiz-question">{{section.question}}</h3>
                        </div>
                        <ul class="quiz-answers-container">
                            <li v-for="(answer, index) in section.answers" :key="'answer-'+index" v-on:click="answerQuestion(section.number, answer.number)" class="quiz-answer" v-bind:class="{'answer-correct' : answer.correct, 'answer-incorrect' : !answer.correct, 'this-answer-picked' : answer.picked}">
                                <ul class="rogue-answers-container">
                                    <li v-for="(rogueAnswer, index) in answer.rogueAnswers" :key="'rogueAnswer-'+index" class="rogue-answer-image-container" v-bind:class="{'answered' : section.answered}">
                                        <img class="rogue-answer-image" v-bind:src="rogueAnswer.image" />
                                        <p class="rogue-answer-name">{{rogueAnswer.name}}</p>
                                    </li>
                                </ul>
                                <p class="quiz-answer-text">{{answer.text}}</p>
                            </li>
                        </ul>
                    </section>
                    <section v-if="section.sectionType == 'results'"  class="quiz-results-container-container" id="quiz-results">
                        <div class="quiz-results-container">
                            <div class="quiz-results-header-container" v-bind:class="{'active' : section.active}">
                                <h3 class="quiz-results-header-text">Quiz Results</h3>
                            </div>
                            <div class="quiz-ranking-container" v-bind:class="{'active' : section.active}">
                                <ul class="quiz-ranking-list">
                                    <li v-for="(quizRanking, i) in results.quizRankings" :key="'quizRanking' + i" class="quiz-ranking-list-item" v-bind:class="{'quiz-ranking-list-item-you': quizRanking.type == 'user'}">
                                        <img class="rogue-ranking-image" v-bind:src="quizRanking.image" />
                                        <p class="quiz-ranking-percentage" v-bind:class="{'quiz-ranking-percentage-you': quizRanking.type == 'user'}">{{Math.round(quizRanking.percentage)}}%</p>
                                        <p class="quiz-rogue-name">{{quizRanking.name}}</p>
                                        <p class="quiz-ranking-place">{{ordinalSuffixOf(i+1)}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import { mapState } from 'vuex'
export default {
    name: 'QuizFooter',
    computed: {
        ...mapState(['active', 'activeQuestionNumber', 'totalNumberOfQuestions', 'onFirstQuestion', 'sections'])  
    },
    methods: {
        goToPreviousQuestion() {
            this.$store.commit('decrementActiveQuestionNumber');
        },
        goToNextQuestion(){
            this.$store.commit('incrementActiveQuestionNumber');
        }
    }
}
</script>