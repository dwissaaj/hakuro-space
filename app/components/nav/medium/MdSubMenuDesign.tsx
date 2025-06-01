import React from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import { FigmaIcon } from "@/app/components/icon/design/FigmaIcon";
import { CameraIcon } from "@/app/components/icon/design/CameraIcon";
import { CanvaIcon } from "@/app/components/icon/design/CanvaIcon";
import { CatalogIcon } from "@/app/components/icon/design/CatalogIcon";

export default function MdSubMenuDesign() {
  return (
    <Dropdown showArrow={true}>
      <DropdownTrigger>
        <Button variant="light" aria-label="setting">
          Design
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        color="primary"
        variant="light"
        aria-label="dropdown menu design"
      >
        <DropdownSection title="Reach me out here">
          <DropdownItem
            startContent={<FigmaIcon className="size-2 lg:size-4" />}
            href="https://www.figma.com/file/RFeIKIAvjsJXMw6SpEdn8V/Kisetsu?type=design&node-id=0%3A1&mode=design&t=36BsevdILGatxItY-1"
            key="ui ux"
          >
            UI/UX
          </DropdownItem>
          <DropdownItem
            startContent={<CameraIcon className="size-2 lg:size-4" />}
            href="https://drive.google.com/drive/folders/1PA9tvOGyg6tFKizkCPpYEtwm_IM6AnBB?usp=sharing"
            key="photography"
          >
            Photography
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
