import React from 'react';

const MobContainer = () => {
    const mapStateToProps = (state) => {
        return {
            numberOfMob: state.numberOfState
        }

    }
    return (
        <div>
            <h1>
                number of mobile
            </h1>
            <button>
                BUY
            </button>

        </div>
    );
};

export default MobContainer;
