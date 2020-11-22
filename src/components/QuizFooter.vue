<template>
    <div class="quiz-footer-container" v-bind:class="{'active' : active}">
        <div class="quiz-footer" v-bind:class="{'active' : active}">
            <button class="navigation-button previous-button" v-bind:class="{'disabled' : onFirstQuestion}" @click="goToPreviousQuestion">Previous</button>
            <div class="quiz-progress-container">
                <div class="quiz-progress">
                    <div class="question-number-container">
                        {{totalNumberOfQuestions >= activeQuestionNumber ? activeQuestionNumber + '/' + totalNumberOfQuestions : 'End'}}
                    </div>
                    <ProgressRing radius="70" :progress="quizProgressPercentage" stroke="10"></ProgressRing>
                </div>
            </div>
            <button class="navigation-button next-button" v-bind:class="{'disabled' : !nextSectionIsAvailable}" @click="goToNextQuestion">Next</button>
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

<style lang="less">
@import '../styles/index.less';
/*navigation buttons*/
.navigation-buttons-container {
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	max-width: 1000px;
	margin: 20px auto 0;
	width: 100%;
}
.navigation-button {
	border: none;
	padding: 10px 0px;
	color: white;
	cursor: pointer;
	border-radius: 5px;
	font-size: 24px;
	outline: none;
	width: 170px;
	position: relative;
	&.disabled {
		pointer-events:none;
	}
	@media @tablets {
		width: 140px;
		font-size: 22px;
	}
	@media @smartphones {
		width: 90px;
		font-size: 20px;
		flex-shrink: 0;
	}
}
.next-button {
	background-color: cadetblue;

	&.disabled {
		background-color: #c2c2c2;
		opacity: 0.4;
	}
}
.previous-button {
	background: none;
	border: 3px solid rgba(0,0,0,0);
	color: cadetblue;
	&.disabled {
		color: #c2c2c2;
		opacity: 0.4;
	}
}

/* quiz footer*/
.quiz-footer-container {
	margin-top: auto;
	position: fixed;
	bottom: 0;
	width: 100%;
	visibility: hidden;
	&.active {
		visibility: visible;
	}
}

.quiz-footer {
	height: 130px;
    transform: translate(0px, 100px);
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
	@media @tablets {
		height: 100px;
	}
	@media @smartphones {
		justify-content: space-between;
		padding: 0 10px;
		height: 85px;
	}
}

.quiz-footer.active {
	transform: translate(0,0);
	background: rgba(245, 242, 183, 0.65);
}

/*quiz progress*/
.quiz-progress {
	width: 108px;
    height: 108px;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    border: 9px solid #dcdab0;
    box-sizing: border-box;
	font-weight: bold;
	@media @tablets {
		transform: scale(0.8);
	}
	@media @smartphones {
		transform: scale(0.6);
	}
}
.question-number-container {
	position: absolute;
	font-size: 20px;
	@media @smartphones {
		font-size: 26px;
	}
}
.progress-circle {
	position: absolute;
}
circle {
	transition: stroke-dashoffset 0.85s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
	stroke: #105c90;
}
</style>