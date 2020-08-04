import React, { useState, useEffect, useRef, useCallback } from 'react';

// Deps
import { closeModal } from './utils';
import isEqual from 'lodash/isEqual';
import extend from 'lodash/extend';
import omit from 'lodash/omit';

// Functions
import blockOverflow from './functions/block-overflow'


class ModalController extends React.Component {
	constructor(props){
		super(props);

		this.calculateEmptyModalData = this.calculateEmptyModalData.bind(this);
		this.modalClosed = this.modalClosed.bind(this);
		this.modalOpened = this.modalOpened.bind(this);

		this.state = {
			modalData: this.calculateEmptyModalData(props.layers),
		}
	}

	calculateEmptyModalData (layerCount) {
		let newData = [];

		for(let k = 0; k < layerCount; k++) {
			newData.push(false);
		}

		return newData;
	}

	modalClosed () {
		blockOverflow(false);
	}
	
	modalOpened () {
		blockOverflow(true);
	}
	
	componentDidMount() {
		let vm = this;
		window.addEventListener('openUniversalModal', (e) => {
			console.log('aç', vm.state.modalData);
			if(!isEqual(vm.state.modalData[e.detail.layer -1], e.detail)){
				let newData = [...vm.state.modalData];
				newData[e.detail.layer -1] = e.detail;
				vm.setState({modalData: newData})
			}
		}, false);

		window.addEventListener('closeUniversalModal', (e) => {
			vm.setState({modalData: this.calculateEmptyModalData(vm.props.layers)})
		}, false);
	}

	componentWillUnmount() {
		window.removeEventListener('openUniversalModal');
		window.removeEventListener('closeUniversalModal');
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.layers !== this.props.layers) {
			console.warn('Dynamic change of the amount of layers on the modals controller is not allowed.');
		}
	}

	render () {
		return (
			<React.Fragment>
				{this.state.modalData.map((data, nth) => (
					<ModalLayer
						key={nth}
						layer={nth + 1}
						data={data}
						closeBtn={this.props.defaultCloseBtn}
						onClose={this.modalClosed}
						onOpen={this.modalOpened}>
						{this.props.children}
					</ModalLayer>
				))}
			</React.Fragment>
		)
	}
}

// const ModalController = (props) => {
// 	const calculateHollowLayers = (layerCount) => {
// 		let retObj = [];
// 		for(let k = 0; k < layerCount; k++) {
// 			retObj.push(k+1);
// 		}
// 		return retObj;
// 	}

// 	const calculateModalData = (layerCount) => {
// 		let newData = [];

// 		for(let k = 0; k < layerCount; k++) {
// 			newData.push(false);
// 		}

// 		return newData;
// 	}

// 	const modalClosed = () => {
// 		// if(!props.modalData && !props.topModalData){
// 		// 	blockOverflow(false);
// 		// }
// 		blockOverflow(false);
// 		// Check if all elems are false.
// 	}

// 	const modalOpened = () => {
// 		blockOverflow();
// 	}
	
// 	const hollowLayers = useRef(calculateHollowLayers(props.layers));
// 	const [modalData, setModalData] = useState(calculateModalData(props.layers));
// 	const [loop, setLoop] = useState(1);

// 	const openModal = (data) => {
// 		console.log('open', modalData);
// 		setLoop(loop + 1);
// 		if(!isEqual(modalData[data.layer -1], data)){
// 			let newData = [...modalData];
// 			newData[data.layer -1] = data;
// 			setModalData(newData);
// 		}
// 	}

// 	const closeModal = useCallback((layer) => {
// 		console.log('close', layer);
// 		setLoop(loop + 1);

// 		console.log('kap', loop, modalData);
// 		// if(modalData[layer -1]){
// 		// 	let newData = [...modalData];
// 		// 	newData[layer -1] = false;
// 		// 	console.log('kapa', newData);
// 		// 	setModalData(newData);
// 		// }
// 	}, [modalData, loop]);
    
//     useEffect(() => {
// 		window.addEventListener('openUniversalModal', (e) => {
// 			openModal(e.detail);
// 		}, false);

// 		window.addEventListener('closeUniversalModal', (e) => {
// 			closeModal(e.detail.layer);
// 		}, false);

// 		return (() => {
// 			window.removeEventListener('openUniversalModal');
// 			window.removeEventListener('closeUniversalModal');
// 		})
// 	}, [])

// 	useEffect(() => {
// 		console.log('modal data change', modalData);
// 	}, [modalData])
	
// 	useEffect(() => {
// 		if(props.layers !== hollowLayers.current.length) {
// 			console.warn('Dynamic change of the amount of layers on the modals controller is not allowed.');
// 		}
// 	}, [props.layers])

// 	return (
// 		<React.Fragment>
// 			{hollowLayers.current.map((key, nth) => (
// 				<ModalLayer
// 					key={nth}
// 					layer={key}
// 					data={modalData[nth]}
// 					closeBtn={props.defaultCloseBtn}
// 					onClose={modalClosed}
// 					onOpen={modalOpened}>
// 					{props.children}
// 				</ModalLayer>
// 			))}
// 		</React.Fragment>
// 	)
// }

ModalController.defaultProps = {
	defaultCloseBtn: <button className="modal-defaultclosebtn" type="button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z"></path></svg></button>,	
	layers: 2,
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

		this.closeBtn = React.cloneElement(
			props.closeBtn, 
			{ onClick: this.closeModal }
		);

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

		if(!isEqual(prevProps.data, vm.props.data)){
			let opts = (vm.props.data === false ? false : extend({}, vm.defaultOpts, vm.props.data));

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
				}, 400);
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
		if(modalKey === false || modalKey === this.props.data.modal) {
			let componentProps = (this.state.component.type.props ? this.state.component.type.props : this.state.component.props);

			closeModal(this.props.layer);
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

export default ModalController