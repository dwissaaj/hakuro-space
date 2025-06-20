"use client";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import { PersonIcon } from "@/app/components/icon/account/PersonIcon";
import { LogoutIcon } from "@/app/components/icon/account/LogoutIcon";
export default function MdSubMenuAccount() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly color="default" variant="ghost" aria-label="setting">
          <PersonIcon className="size-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu color="primary" variant="light" aria-label="dropdown menu">
        <DropdownSection title="Setting Yours" showDivider>
          <DropdownItem
            href="/account"
            endContent={<PersonIcon className="size-2 lg:size-4" />}
          >
            Your Account
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
