"use client";

import { useState } from "react";
import {
    Autocomplete,
    TextField,
    AutocompleteProps,
} from "@mui/material";


import * as Icons from "@wordpress/icons";

import Item from "./item";

export default function IconList() {
    console.log(typeof Icons);
    const [ foundIcons, setFoundIcons ] = useState<Record<string, typeof Icons[keyof typeof Icons]>>(Icons);

    const filterList = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
        const filteredIcons: Record<string, typeof Icons[keyof typeof Icons]> = {};

        if ( ! value ) {
            setFoundIcons( Icons );
            return;
        }

        Object.keys( Icons ).forEach( ( key ) => {
            if ( 'Icon' === key ) {
                return;
            }

            if ( key.includes( value ) ) {
                filteredIcons[ key ] = Icons[ key as keyof typeof Icons ];
            } 
        } );

        setFoundIcons( filteredIcons );
    }

    return (
        <>
            <Autocomplete
				freeSolo
				options={ Object.keys( Icons ) }
				renderInput={ ( params ) => <TextField { ...params } label="Buscar" /> }
				onChange={ filterList }
                className="w-full mb-12"
			/>

            <div className="grid gap-4 grid-cols-2 w-full justify-center xl:grid-cols-5">
                {
                    Object.keys( foundIcons ).map( ( key ) => {
                        if ( 'Icon' === key ) {
                            return null; 
                        }

                        return (
                            <Item key={ `icon-${key}` } icon={ foundIcons[ key as keyof typeof foundIcons ] } size={ 64 } name={ key } />
                        )
                    } )
                }
            </div>
        </>
    )
}