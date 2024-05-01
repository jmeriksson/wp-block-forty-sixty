import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save({ attributes }) {
	const HeadingTag = attributes.leftColumnHeadingLevel || 'h2'
	return (
		<div { ...useBlockProps.save() }>
			<div className="forty-sixty-columns">
				<div className="forty-sixty-columns__left-column">
					<HeadingTag>{ attributes.leftColumnHeading }</HeadingTag>
				</div>
				<div className="forty-sixty-columns__right-column">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	)
}
