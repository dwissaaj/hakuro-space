import { Listbox, ListboxItem } from "@nextui-org/react";
import { FigmaIcon } from "@/app/components/icon/design/FigmaIcon";
import { CameraIcon } from "@/app/components/icon/design/CameraIcon";
import { CanvaIcon } from "@/app/components/icon/design/CanvaIcon";
import { CatalogIcon } from "@/app/components/icon/design/CatalogIcon";
export default function SubMenuDesign() {
    return (
        <Listbox aria-label="Listbox data"
            variant="bordered" color="primary" >
            <ListboxItem startContent={<FigmaIcon className="size-2 lg:size-4" />} href="https://www.figma.com/file/RFeIKIAvjsJXMw6SpEdn8V/Kisetsu?type=design&node-id=0%3A1&mode=design&t=36BsevdILGatxItY-1" key="ui ux">
                UI/UX
            </ListboxItem >
            <ListboxItem startContent={<CameraIcon className="size-2 lg:size-4" />} href="https://drive.google.com/drive/folders/1PA9tvOGyg6tFKizkCPpYEtwm_IM6AnBB?usp=sharing" key="photography">
                Photography
            </ListboxItem >
            
        </Listbox>
    )
}