import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import React from 'react'

export default function SelectPages() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Navigation</NavigationMenuTrigger>
          <NavigationMenuContent className=''>
            <NavigationMenuLink href='/'>
              <div className='block w-[134px] p-2 hover:bg-lighterBackground'>Home</div>
            </NavigationMenuLink>
            <NavigationMenuLink href='/projects'>
              <div className='block w-[134px] p-2 hover:bg-lighterBackground'>Projects</div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

