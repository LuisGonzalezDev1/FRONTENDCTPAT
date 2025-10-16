import {
  HomeIcon,
  UserCog,
  User,
  Truck,
  CircleUserRound,
  Container,
  File
} from "lucide-react";
import NavLinkComponent from "../components/utilities-components/NavLinkComponent";

export default function Navegation() {
  return (
    <div className="space-y-1.5">
      <NavLinkComponent url="/dashboard" text="">
        <HomeIcon />
      </NavLinkComponent>
      <>
        <NavLinkComponent url="/user" text="Usuarios">
          <User />
        </NavLinkComponent>

        <NavLinkComponent url="/rol" text="Roles">
          <UserCog />
        </NavLinkComponent>

        <NavLinkComponent url="/driver" text="Piloto">
          <CircleUserRound />
        </NavLinkComponent>

        <NavLinkComponent url="/carriers" text="Transportista">
          <Truck />
        </NavLinkComponent>

        <NavLinkComponent url="/container" text="Contenedor">
          <Container />
        </NavLinkComponent>

        <NavLinkComponent url="/ctpats" text="Ctpats">
          <File  />
        </NavLinkComponent>
      </>
    </div>
  );
}
