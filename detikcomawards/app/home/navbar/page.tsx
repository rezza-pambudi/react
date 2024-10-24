import { Button } from "@/components/ui/button";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-4 left-0 z-50 w-full h-[5rem]">
        <div className="container max-w-[320px] sm:max-w-[639px] mx-auto">
          <div className="navbar-wrap">
            <NavigationMenu className="navbar-button">
              
                  <div className="w-[132px]">
                    <Image
                      src="/images/hero/logo-detikcom-awards.png"
                      alt=""
                      width={132}
                      height={132}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                
            </NavigationMenu>
            <NavigationMenu className="navbar-button">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Discover
                </NavigationMenuLink>
              </Link>
            </NavigationMenu>
            <NavigationMenu className="navbar-button">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Award List
                </NavigationMenuLink>
              </Link>
            </NavigationMenu>
            <NavigationMenu className="navbar-button">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  );
}
