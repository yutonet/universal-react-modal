import React, { useEffect } from 'react';

// Deps
import { connect } from "react-redux";
import { closeModal } from "./utils";
import isEqual from "lodash/isEqual";
import extend from "lodash/extend";
import omit from "lodash/omit";

// Functions
import blockOverflow from './functions/block-overflow'

const mapStateToProps = (state, props) => {
	return {
		modalData: state.modals.modalData,
		topModalData: state.modals.topModalData,
	};
};

const ModalController = (props) => {
	const modalClosed = () => {
		if(!props.modalData && !props.topModalData){
			blockOverflow(false);
		}
	}

	const modalOpened = () => {
		blockOverflow();
    }
    
    useEffect(() => {
        console.log('hello world');
    }, [])

	return (
		<React.Fragment>
			<ModalLayer
				top
				modalData={props.topModalData}
				onClose={modalClosed}
				onOpen={modalOpened}>
				{props.children}
			</ModalLayer>
			<ModalLayer
				modalData={props.modalData}
				onClose={modalClosed}
				onOpen={modalOpened}>
				{props.children}
			</ModalLayer>
		</React.Fragment>
	)
}

ModalController.defaultProps = {
    includeStyles: true,
}

class ModalLayer extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data: false,
			show: false,
			component: false,
		}

		this._mounted = false;
		this.actionTimer = false;
		this.closeModal = this.closeModal.bind(this);
		this.getModalComponent = this.getModalComponent.bind(this);
		this.clearActions = this.clearActions.bind(this);

		this.closeBtn = <button className="modal-closebtn" type="button" onClick={this.closeModal}><i className="icon-close"></i></button>;

		this.defaultOpts = {
			modal: "",
			url: false,
			urlTitle: false,
			closeBtn: this.closeBtn,
			onClose: this.onClose,
			className: "",
		}
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	componentDidUpdate(prevProps, prevState){
		let vm = this;

		const updateData = () => {
			vm.setState({ component: vm.getModalComponent() });
			if(vm.state.data !== false){
				vm.actionTimer = setTimeout(function() {
					if(vm._mounted) {
						vm.props.onOpen();
						vm.setState({show: true});
						vm.actionTimer = false;
					}
				}, 30);
			}
		}

		if(!isEqual(prevProps.modalData, vm.props.modalData)){
			let opts = (vm.props.modalData === false ? false : extend({}, vm.defaultOpts, vm.props.modalData));

			if(vm.state.show){
				vm.clearActions();
				vm.setState({show: false});

				vm.actionTimer = setTimeout(function() {
					if(vm._mounted) {
						vm.setState({data: false});
						vm.setState({data: opts});
						vm.props.onClose();
						vm.actionTimer = false;
					}
				}, 600);
			}
			else {
				vm.setState({data: opts});
			}
		}

		if(!isEqual(prevState.data, vm.state.data)){
			if(vm.actionTimer !== false) {
				vm.clearActions();
				setTimeout(() => {
					if(vm._mounted) {
						updateData();
					}
				}, 601);;
			}
			else {
				updateData();
			}
		}
	}

	getModalComponent() {
		let Component = false;
		let vm = this;

		if(this.state.data){
			let props = omit(this.state.data, ['modal'])
			let children = React.Children.toArray(this.props.children);

			props.className = 'modal-contentwrap ' + props.className;
			if(props.wide) { props.className += ' wide'; }
			let modalKey = {...this.state.data}['modal'];
			props.close = (event) => { vm.closeModal(event, modalKey); }

            for(let k = 0; k < children.length; k++){
                let item = children[k];
                if(item.props.name === this.state.data.modal || (item.type.props && item.type.props.name === this.state.data.modal)){
                    Component = React.cloneElement(
                        item, {...props}
                    );
                }
            }

			if(Component === false){
				console.warn('Modals Error: Modal "'+this.state.data.modal+'" not found.')
			};
		}

		return Component;
	}

	clearActions() {
		if(this.actionTimer !== false) {
			clearTimeout(this.actionTimer);
			this.actionTimer = false;
		}
	}

	closeModal(closeData, modalKey = false){
		if(modalKey === false || modalKey === this.props.modalData.modal) {
			let componentProps = (this.state.component.type.props ? this.state.component.type.props : this.state.component.props);

			closeModal(this.props.top);
			if(this.state.data.onClose){
				this.state.data.onClose(closeData, this.state.data);
			}
			if(componentProps.onClose){
				componentProps.onClose(closeData, this.state.data);
			}
		}
	}

	render() {
		let Component = this.state.component;

		if(Component){
			let props = (Component.type.props ? Component.type.props : Component.props);
			return (
				<div className={"modal-container " + (this.props.top ? 'top-level ' : '') + props.containerClass + (this.state.show ? ' show' : '')}>
					<div className="modal-outerwrap">
						<div className="modal-innerwrap">
							{Component}
						</div>
						{(props.preventClose ? 
							<div className="modal-overlay"></div>
						:
							<button className="modal-overlay" onClick={(e) => { if(!props.preventClose){props.close(e)}}}></button>
						)}
					</div>
				</div>
			);
		}
		else { 
			return false;
		}
	}
}

ModalLayer.defaultProps = {
	top: false,
}

export default connect(mapStateToProps)(ModalController);