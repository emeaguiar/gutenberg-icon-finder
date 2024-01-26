/**
 * External dependencies
 */
import { useState } from 'react';
import {
	Autocomplete,
	TextField,
} from '@mui/material';
import styled from '@emotion/styled';

/**
 * WordPress dependencies
 */
import * as Icons from '@wordpress/icons';

/**
 * Internal dependencies
 */
import IconItem from './IconItem';

const StyledGrid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	inline-size: 100%;
	justify-content: center;

	@media (min-width: 1280px) {
		grid-template-columns: repeat(5, minmax(120px, 1fr));
	}
`;

const SearchBar = styled( Autocomplete )`
	margin-block-end: 2rem;
`;

const List = () => {
	const [ foundIcons, setFoundIcons ] = useState( Icons );

	const filterList = ( event, value ) => {
		const filteredIcons = {};

		if ( ! value ) {
			setFoundIcons( Icons );
			return;
		}

		Object.keys( Icons ).filter( ( key ) => {
			if ( 'Icon' === key ) {
				return;
			}

			if ( key.includes( value ) ) {
				filteredIcons[ key ] = Icons[ key ];
			}
		} );

		setFoundIcons( filteredIcons );
	}

	return (
		<>
			<SearchBar
				freeSolo
				options={ Object.keys( Icons ) }
				renderInput={ ( params ) => <TextField { ...params } label="Buscar" /> }
				onChange={ filterList }
			/>

			<StyledGrid>
				{
					Object.keys( foundIcons ).map( ( key ) => {
						if ( 'Icon' === key ) {
							return;
						}

						return (
							<IconItem key={ key } icon={ Icons[ key ] } size={ 64 } name={ key } />
						);
					} )
				}
			</StyledGrid>
		</>
	);
};

export default List;
