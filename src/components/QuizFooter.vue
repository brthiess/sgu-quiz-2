<template>
    <div class="quiz-footer-container" v-bind:class="{'active' : active}">
        <div class="quiz-footer" v-bind:class="{'active' : active}">
            <button class="navigation-button previous-button" v-bind:class="{'disabled' : onFirstQuestion}" :onclick="goToPreviousQuestion">Previous</button>
            <div class="quiz-progress-container">
                <div class="quiz-progress">
                    <div class="question-number-container">
                        {{totalNumberOfQuestions >= activeQuestionNumber ? activeQuestionNumber + '/' + totalNumberOfQuestions : 'End'}}
                    </div>
                    <ProgressRing radius="70" :progress="quizProgressPercentage" stroke="10"></ProgressRing>
                </div>
            </div>
            <button class="navigation-button next-button" v-bind:class="{'disabled' : !nextSectionIsAvailable}" :onclick="goToNextQuestion">Next</button>
        </div>
    </div>
</template>

<script>
import ProgressRing from '@/components/ProgressRing.vue'
import { mapState } from 'vuex'

export default {    
    name: 'QuizFooter',
    components: {
        ProgressRing
    },
    computed: {
        ...mapState(['active', 'activeQuestionNumber', 'totalNumberOfQuestions', 'onFirstQuestion']),
        nextSectionIsAvailable: function(){
            return this.activeQuestionNumber >= this.totalNumberOfQuestions;
        },
        quizProgressPercentage: function(){
            return this.activeQuestionNumber / this.totalNumberOfQuestions;
        }
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