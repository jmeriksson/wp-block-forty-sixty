import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor'
import { PanelBody, SelectControl } from '@wordpress/components'

export default function Edit({ attributes, setAttributes}) {
	const { leftColumnHeading, leftColumnHeadingLevel } = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block settings', 'forty-sixty-block' ) }>
					<SelectControl
						label={ __( 'Heading Level', 'forty-sixty-block' ) }
						value={ leftColumnHeadingLevel }
						options={ [
							{ label: "H1", value: "h1" },
							{ label: "H2", value: "h2" },
							{ label: "H3", value: "h3" },
							{ label: "H4", value: "h4" },
							{ label: "H5", value: "h5" },
							{ label: "H6", value: "h6" }
						]}
						onChange={ ( value ) => setAttributes( { leftColumnHeadingLevel: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } >
				<div className="forty-sixty-columns">
					<div className="forty-sixty-columns__left-column">
						<RichText
							tagName={ leftColumnHeadingLevel }
							allowedFormats={['core/bold', 'core/italic']}
							value={ leftColumnHeading }
							onChange={ ( value ) => setAttributes( { leftColumnHeading: value } ) }
						/>
					</div>
					<div className="forty-sixty-columns__right-column">
						<InnerBlocks allowedBlocks={ ['core/paragraph', 'core/image', 'core/button', 'core/list'] } />
					</div>
				</div>
			</div>
		</>
	)
}
