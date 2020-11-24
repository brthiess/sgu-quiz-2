import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activeQuestionNumber: 1,
		active: false,
		onFirstQuestion: true,
		onLastQuestion: false,
		quizProgressPercentage: 0,
		finished: false,
		totalNumberOfQuestions: 1,
		sections: []
    },
    mutations: {
        setActiveQuestionNumber(state, activeQuestionNumber){
            state.activeQuestionNumber = activeQuestionNumber;
        },
        decrementActiveQuestionNumber(state){
            if (state.activeQuestionNumber > 1){
                state.activeQuestionNumber -= 1;
            }
        },
        incrementActiveQuestionNumber(state){
            if (state.activeQuestionNumber < state.totalNumberOfQuestions){
                state.activeQuestionNumber += 1;
            }
        },
        setActive(state, active){
            state.active = active;
        },
        setInFirstQuestion(state, onFirstQuestion){
            state.onFirstQuestion = onFirstQuestion;
        },
        setOnLastQuestion(state, onLastQuestion){
            state.onLastQuestion = onLastQuestion;
        },
        setQuizProgressPercentage(state, quizProgressPercentage){
            state.quizProgressPercentage = quizProgressPercentage;
        },
        setFinished(state, finished){
            state.finished = finished;
        },
        setTotalNumberOfQuestions(state, totalNumberOfQuestions){
            state.totalNumberOfQuestions = totalNumberOfQuestions;
        },
        setSections(state, sections){
            state.sections = sections;
        },
        setSection(state, section, sectionNumber){
            state.sections[sectionNumber-1] = section;
        }
    }
})