import React from 'react'

const ExampleModal = (props) => {
	return (
		<div className={props.className}>
			{props.closeBtn}
			<div className="modal-content">
				<h1 style={{marginBottom: '2rem'}}>Hello World</h1>
				<div className="wysiwyg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate dolor at augue eleifend egestas. Nulla finibus erat leo, a fringilla velit efficitur sit amet. Donec ullamcorper egestas luctus. Phasellus imperdiet venenatis convallis. Etiam eget eleifend sapien. Cras dapibus pharetra sem non porttitor. Donec id diam sem. Nunc at tempor augue, vel gravida lectus. Maecenas rutrum dui in pulvinar pellentesque. Proin sed ultricies urna. Quisque vulputate odio et velit laoreet, id tempor leo ullamcorper. Integer varius vulputate tortor, nec mollis ante. Nulla nisi libero, pulvinar eu ligula id, dictum suscipit nisi. Curabitur sed lectus non ex pulvinar imperdiet.</p>

                    <p>Mauris eu condimentum augue. Cras sit amet sodales ligula, non pharetra augue. Nam eu ipsum condimentum, elementum nulla id, iaculis odio. Fusce ac est egestas, tempor dui eget, vulputate magna. Suspendisse sodales vel libero non porta. Nunc nisi eros, vestibulum a porta posuere, mattis ac purus. Fusce eget purus risus. Quisque posuere vitae sem quis viverra. Quisque ipsum tortor, ultricies ornare lobortis vitae, ornare eget tellus. Ut et orci at dui ultrices dapibus sit amet sed odio. Nullam interdum turpis vitae dui faucibus auctor vel at nulla. Duis semper ligula odio, quis iaculis mauris tristique vitae. Aliquam eros leo, feugiat at hendrerit vitae, vestibulum non erat. Quisque non neque a nisi pulvinar aliquam. Nullam risus neque, laoreet in pretium sit amet, volutpat et urna.</p>

                    <p>Ut sollicitudin vestibulum ex vitae fermentum. Donec porta nibh mauris, vel consequat ipsum fermentum nec. Donec finibus mattis interdum. Etiam venenatis semper ipsum, a porta augue. Vestibulum eget nunc facilisis, ultrices quam sed, efficitur mi. Phasellus in lacus cursus, dictum elit nec, tincidunt odio. Proin consequat nibh at augue scelerisque maximus. Quisque iaculis massa non nisi rhoncus, ut aliquet orci euismod.</p>
                </div>
			</div>
		</div>
	)
}

ExampleModal.defaultProps = {
	name: "example",
	containerClass: "modal-example",
}

export default ExampleModal