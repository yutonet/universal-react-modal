import React, { useState, useEffect } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";

import codeTheme from 'prism-react-renderer/themes/github'

const Code = (props) => {
	const [codeText, setCodeText] = useState(false);
	
	useEffect(() => {
		if(props.src) {
			fetch(process.env.PUBLIC_URL + '/examples/' + props.src).then((response) => {
				if(response.ok){
					response.text().then((text) => {
						setCodeText(text);
					})
				}
			})
		}
	}, [props.src])

	return (
		<div className="code-display">
			{codeText === false ?
				<div className="display-loader">...</div>
				:
				<Highlight {...defaultProps} theme={codeTheme} code={codeText} language="jsx">
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			}
		</div>
	)
}

export default Code;