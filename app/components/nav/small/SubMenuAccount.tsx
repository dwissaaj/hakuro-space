"use client";
import {
  ListboxSection,
  SelectItem,
  Select,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { LanguageIcon } from "@/app/components/icon/account/LanguageIcon";
import { LogoutIcon } from "@/app/components/icon/account/LogoutIcon";
import { PersonIcon } from "@/app/components/icon/account/PersonIcon";
import { useRouter } from "next/navigation";
export default function SubMenuAccount() {
  const router = useRouter();
  const signOut = async () => {
    try {
      const signOut = await fetch("/api/user/logout", { method: "DELETE" });
      if (signOut["status"] === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Listbox aria-label="Listbox data" variant="flat" color="primary">
      <ListboxSection title="Your Privacy" showDivider>
        <ListboxItem
          startContent={<PersonIcon className="size-2 lg:size-4" />}
          href="/account"
          key="account"
        >
          Your Account
        </ListboxItem>
        <ListboxItem
          startContent={<LanguageIcon className="size-2 lg:size-4" />}
          href=""
          key="language"
        >
          <Select
            placeholder="English"
            value={"english"}
            defaultSelectedKeys={"english"}
            disabledKeys={["japan", "indonesia"]}
            label="Pick Language"
            key="secondary"
            variant="underlined"
          >
            <SelectItem
              variant="flat"
              color="primary"
              key="english"
              value="english "
            >
              English
            </SelectItem>
            <SelectItem
              variant="flat"
              color="primary"
              key="japan"
              value="japa "
            >
              Japan
            </SelectItem>

            <SelectItem
              variant="flat"
              color="primary"
              key="indonesia"
              value="Indonesia "
            >
              Indonesia
            </SelectItem>
          </Select>
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  );
}
