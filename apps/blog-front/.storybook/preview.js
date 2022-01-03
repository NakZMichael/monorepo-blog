import { muiTheme } from 'storybook-addon-material-ui'

import {themeOptions} from '../theme'

export const decorators = [
	muiTheme([themeOptions])
];