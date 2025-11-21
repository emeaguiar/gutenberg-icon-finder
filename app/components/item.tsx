import { IconButton } from "@mui/material";
import { Icon } from "@wordpress/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Item( { icon, size, name }: { icon: any, size: number, name: string } ) {
    return (
        <div className="items-center flex flex-col gap-4 w-52">
            <IconButton>
                <Icon icon={ icon } size={ size } />
            </IconButton>

            <code className="text-xs">{ name }</code>
        </div>
    );
}
