import * as React from 'react';
import styles from './Button.module.css'
import PropTypes from 'prop-types'
export interface IButtonProps {
    onButtonClick: Function
    style?: object
    bgColor?: string
    children: string | React.ReactNode | Array<React.ReactNode | string>
    type?: 'button' | 'reset' | 'submit'
}
interface IButtonState {
    isClicked: boolean
}

class Button extends React.PureComponent<IButtonProps, IButtonState> {
    defaultProps={
        bgColor:'lime',
        type:'button'
    }
    propTypes={
        children: PropTypes.any.isRequired,
        onButtonClick: PropTypes.func.isRequired,
        bgColor: PropTypes.string.isRequired,
        style: PropTypes.object,
        type: PropTypes.oneOf(['button','reset','submit'])
    }
    constructor(props: IButtonProps) {
        super(props);
        this.state = { isClicked: false }
    }
    componentDidMount(): void {

    }
    componentDidUpdate(prevProps: Readonly<IButtonProps>, prevState: Readonly<IButtonState>, snapshot?: any): void {

    }
    componentWillUnmount(): void {

    }
    public render() {
        return (
            <button type={this.props.type} onClick={(evt) => {
                this.setState({isClicked:true});
                this.props.onButtonClick();
            }} className={!this.state.isClicked ? styles.Button : styles.Button + ' ' + styles.clicked}
                style={{ ...this.props.style, backgroundColor: this.props.bgColor }}
            >{this.props.children}</button>
        );
    }
}

export default Button;