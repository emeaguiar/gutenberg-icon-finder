/**
 * External dependencies
 */
import { IconButton } from '@mui/material';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/icons';

const IconItem = ( { icon, size } ) => {
    return (
        <IconButton>
            <Icon icon={ icon } size={ 64 } />  
        </IconButton>
    )
};

export default IconItem;