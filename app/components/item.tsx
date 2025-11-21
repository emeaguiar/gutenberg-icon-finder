import { useState } from "react";
import { renderToString } from "react-dom/server";
import { IconButton, Tooltip } from "@mui/material";
import { Icon } from "@wordpress/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Item( { icon, size, name }: { icon: any, size: number, name: string } ) {
    const [ copyText, setCopyText ] = useState<string>( "Copiar SVG al portapapeles" );

    const copyToClipboard = async () => {
        const stringIcon = renderToString( icon );
        await navigator.clipboard.writeText( stringIcon );

        setCopyText( "¡Copiado!" );

        setTimeout( () => {
            setCopyText( "Copiar al portapapeles" );
        }, 2000 );
    }

    return (
        <div className="items-center flex flex-col gap-4 lg:w-52">
            <Tooltip title={ copyText } arrow placement="top">
                <IconButton onClick={ copyToClipboard } >
                    <Icon icon={ icon } size={ size } />
                </IconButton>
            </Tooltip>

            <code className="text-xs">{ name }</code>
        </div>
    );
}
