<template>
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
</template>


<script>
import { mapState } from 'vuex'


</script>