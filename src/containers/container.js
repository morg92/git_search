import { connect } from 'react-redux';
import Components from './../components/component.js';
import { take } from './../actions/index.js';

let mapStateToProps = ({ ui, data }) => ({
    ui,
    data
});

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchTakeUser: (value) => {
            dispatch(take(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);