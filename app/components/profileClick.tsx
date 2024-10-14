"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1>Profile</h1>
        {/* add avatar */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Add an existing account</DropdownMenuLabel>
        <DropdownMenuLabel>Log out @username</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
