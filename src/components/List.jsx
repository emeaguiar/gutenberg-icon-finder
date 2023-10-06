/**
 * External dependencies
 */
import { Grid, Icon } from '@mui/material';

/**
 * WordPress dependencies
 */
import * as Icons from '@wordpress/icons';

/**
 * Internal dependencies
 */
import IconItem from './IconItem';

const List = () => {
	return (
		<Grid container spacing={ 2 }>
			{
				Object.keys( Icons ).map( ( key ) => {
					if ( 'Icon' === key ) {
						return;
					}

					return (
						<Grid item key={ key } xs={ 6 } md={ 3 }>
							<IconItem icon={ Icons[ key ] } size={ 64 } name={ key } />
						</Grid>
					);
				} )
			}
		</Grid>
	);
};

export default List;
