import React from 'react';

import Header from '../components/Header/Header';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.sloganRef = this.props.sloganRef;
        this.appRef = this.props.appRef;

        this.catchSloganUp = this.catchSloganUp.bind(this);
        this.catchSloganDown = this.catchSloganDown.bind(this);
    }

    slideSloganUp(sloganRef, appRef) {
        const sloganBlock = sloganRef.current;
        sloganBlock.style.position = 'absolute';
        sloganBlock.style.visibility = 'hidden';

        const appBlock = appRef.current;
        appBlock.style.gridTemplateRows = '50px 1fr';
    }

    slideSloganDown(sloganRef, appRef) {
        const sloganBlock = sloganRef.current;
        sloganBlock.style.position = 'static';
        sloganBlock.style.visibility = 'visible';

        const appBlock = appRef.current;
        appBlock.style.gridTemplateRows = '50px 1fr 3fr';
    }

    catchSloganUp() {
        this.slideSloganUp(this.sloganRef, this.appRef);
    }

    catchSloganDown() {
        this.slideSloganDown(this.sloganRef, this.appRef);
    }

    render() {
        return (
            <Header
                slideUp={this.catchSloganUp}
                slideDown={this.catchSloganDown}
            />
        );
    }
}

export default HeaderContainer;