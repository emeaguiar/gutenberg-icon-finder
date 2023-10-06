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
	console.log( Icons );
	return (
		<Grid container spacing={ 2 }>
			{
				Object.keys( Icons ).map( ( key ) => {
					if ( 'Icon' === key ) {
						return;
					}

					return (
						<Grid item  key={ key } xs={ 12 } md={ 3 }>
							<IconItem icon={ Icons[ key ] } size={ 64 } />
						</Grid>
					);
				} )
			}
		</Grid>
	);
};

export default List;
