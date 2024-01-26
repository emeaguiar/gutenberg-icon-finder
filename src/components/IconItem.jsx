/**
 * External dependencies
 */
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/icons';

const Item = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 200px;
`;

const IconItem = ( { icon, size, name } ) => {
    return (
        <Item>
            <IconButton>
                <Icon icon={ icon } size={ 64 } />
            </IconButton>

            <code>{ name }</code>
        </Item>
    )
};

export default IconItem;