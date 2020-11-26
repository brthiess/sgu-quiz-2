import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activeSectionNumber: 1,
		active: false,
		onFirstQuestion: true,
		onLastQuestion: false,
		quizProgressPercentage: 0,
		finished: false,
        totalNumberOfQuestions: 1,
        totalNumberOfSections: 1,
        sections: [],
        results: {
            placing: 1,
            numberOfQuestionsAnswered: 0,
            numberOfQuestionsAnsweredCorrectly: 0,
			percentage: 100
        }
    },
    mutations: {
        setActiveSectionNumber(state, activeSectionNumber){
            state.activeSectionNumber = activeSectionNumber;
        },
        decrementActiveSectionNumber(state){
            if (state.activeSectionNumber > 1){
                state.activeSectionNumber -= 1;
            }
        },
        incrementActiveSectionNumber(state){
            if (state.activeSectionNumber < state.totalNumberOfSections){
                state.activeSectionNumber += 1;   
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
        setTotalNumberOfSections(state, totalNumberOfSections){
            state.totalNumberOfSections = totalNumberOfSections;
        },
        setSections(state, sections){
            state.sections = sections;
        },
        setSection(state, section, sectionNumber){
            state.sections[sectionNumber-1] = section;
        },
        answerQuestion(state, correct){
            state.results.numberOfQuestionsAnswered++;
            state.results.numberOfQuestionsAnsweredCorrectly += (correct ? 1 : 0);
        }
    }
})