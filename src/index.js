import { registerBlockType } from '@wordpress/blocks'
import './style.scss'
import Edit from './edit'
import save from './save'
import metadata from './block.json'

const DrawerLeftIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		aria-hidden="true"
		focusable="false">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 18.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h2.5v13zm10-.5c0 .3-.2.5-.5.5h-8v-13h8c.3 0 .5.2.5.5v12z">
		</path>
	</svg>
)

registerBlockType( metadata.name, {
	icon: DrawerLeftIcon,
	edit: Edit,
	save,
} )
