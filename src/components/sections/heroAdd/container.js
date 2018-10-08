import View from './view'
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'

const mapStateToProps = (state) => {

    return {
        playerClass: state.playerClasses.item,
        isFetching: state.playerClasses.isFetching || state.heroes.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {

    return {
        onSubmitHero: (data) => {
            dispatch(HeroesActions.postPlayerClassHero(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)