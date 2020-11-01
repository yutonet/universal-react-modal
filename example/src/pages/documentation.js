import React from 'react'

// Deps
import { NavLink } from 'react-router-dom'
import Code from '../components/code'

const defaultCloseBtnCode = `
<button
	className="modal-defaultclosebtn"
	type="button">
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1024 1024">
		<path d="M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z">
		</path>
	</svg>
</button>
`

const Documentation = (props) => {
	return (
		<main className="page documentation">
			<div className="wrapper wysiwyg">
				<h1>Documentation</h1>
				
				<h2>ModalController</h2>
				<p>ModalController is the HoC that provides the modal functionalities. It needs to be included in the top level of your application.</p>

				<p><i>To see how, see the <NavLink to="getting-started">getting started page</NavLink>.</i></p>

				<h4>Properties</h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Default value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>layers</th>
							<td>Defines the amount of layers included in the modal controller. This property has to be predefined and constant, and cannot be changed dynamically.</td>
							<td>2</td>
						</tr>
						<tr>
							<th>defaultCloseBtn</th>
							<td>Defines the default close button provided from the ModalController to the modal components.</td>
							<td>
								<Code content={defaultCloseBtnCode} />
							</td>
						</tr>
					</tbody>
				</table>

				<h2>Modal Component</h2>
				<p>The React components into the ModalController. Any React component can be a modal component as long as the required properties are given.</p>

				<h4>Properties</h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Default value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>name</th>
							<td>The identifier of the Modal Component. Needs to be unique.</td>
							<td><i>undefined</i></td>
						</tr>
						<tr>
							<th>containerClass</th>
							<td>Additional classes for the modal container inserted by the ModalController. Useful for styling and identification purposes.</td>
							<td><i>undefined</i></td>
						</tr>
						<tr>
							<th>preventClose</th>
							<td>Prevents closing when clicked on the overlay. The close would still work as it can be removed from the component manually when neccesary.</td>
							<td>false</td>
						</tr>
					</tbody>
				</table>

				<h4>A simple Modal Component</h4>
				<Code src='gettingstarted-3.js' />

				<h2>openModal</h2>
				<p>openModal is used to open a modal nested in the ModalController. This function takes two parameters. (modalName and modalProps).</p>
				<Code src='documentation-openmodal.js' />

				<h4>Special parameters</h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Default value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>layer</th>
							<td>The layer that the modal will be opened in.</td>
							<td>1</td>
						</tr>
						<tr>
							<th>modal</th>
							<td>Name of the modal.</td>
							<td><i>First parameter of the openModal function.</i></td>
						</tr>
						<tr>
							<th>onClose</th>
							<td>The event to be triggered when the modal is closed.</td>
							<td><i>undefined</i></td>
						</tr>
						<tr>
							<th>closeBtn</th>
							<td>Close button component.</td>
							<td><i>default close button component provided by ModalController.</i></td>
						</tr>
					</tbody>
				</table>

				<h2>closeModal</h2>
				<p>closeModal is used to close all modals, or close a specific layer if provided with a parameter.</p>
				<Code src='documentation-closemodal.js' />
			</div>
		</main>
	)
}

export default Documentation;