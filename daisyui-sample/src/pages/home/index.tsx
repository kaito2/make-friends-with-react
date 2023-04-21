import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <ul className="menu  pt-2 w-80 bg-base-100 text-base-content">
      <li className="mb-2 font-semibold text-xl">
        <Link href={"/app/welcome"}>
          <Image
            className="mask mask-squircle w-10"
            src="/logo192.png"
            alt="DashWind Logo"
          />
          DashWind
        </Link>{" "}
      </li>
      {routes.map((route, k) => {
        return (
          <li className="" key={k}>
            {route.submenu ? (
              <SidebarSubmenu {...route} />
            ) : (
              <Link
                href={route.path}
                className={clsx(
                  isActive ? "font-semibold  bg-base-200 " : "font-normal"
                )}
              >
                {route.icon} {route.name}
                {location.pathname === route.path ? (
                  <span
                    className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                    aria-hidden="true"
                  ></span>
                ) : null}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};
