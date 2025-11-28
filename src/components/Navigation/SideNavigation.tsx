/**
 * Side Navigation Component
 * Main navigation menu displayed on the left side of the application
 */

import svgPaths from "../../imports/svg-amvb8qcw3b";

/* ----------------------
   Icon Components
-----------------------*/

// Logo icon (pink)
function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" viewBox="0 0 24 24">
        <path d={svgPaths.p6b89100} fill="#DC0078" />
      </svg>
    </div>
  );
}

// New flow icon
function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" viewBox="0 0 24 24">
        <path d={svgPaths.p399d5400} fill="#060809" />
      </svg>
    </div>
  );
}

// My flows icon
function Icon2() {
  return (
    <svg className="block size-full" viewBox="0 0 24 24">
      <path d={svgPaths.p19a51e00} fill="#060809" />
    </svg>
  );
}

// Flows library icon
function Icon3() {
  return (
    <svg className="block size-full" viewBox="0 0 24 24">
      <path d={svgPaths.p1b4b4080} fill="#060809" />
    </svg>
  );
}

/* ----------------------
   Navigation Item Components
-----------------------*/

// Logo navigation item (top of sidebar)
function NavigationItemLeft() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px]">
      <Icon />
    </div>
  );
}

// New flow navigation item
function NavigationItemLeft1() {
  return (
    <div className="box-border flex gap-[4px] h-[28px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px]">
      <Icon1 />
    </div>
  );
}

// My flows navigation item
function NavigationItemLeft2() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px] mb-[-10px]">
      <Icon2 />
    </div>
  );
}

// Flows library navigation item
function NavigationItemLeft3() {
  return (
    <div className="box-border flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] rounded-[9999px] mb-[-10px]">
      <Icon3 />
    </div>
  );
}

/* ----------------------
   Frame Components (Navigation Items with Labels)
-----------------------*/

// Logo frame (top)
function Frame3() {
  return (
    <div className="flex items-start justify-between w-full">
      <NavigationItemLeft />
    </div>
  );
}

// New flow frame
function Frame() {
  return (
    <div className="flex flex-col items-center w-full">
      <NavigationItemLeft1 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">
        New flow
      </p>
    </div>
  );
}

// My flows frame
function Frame1() {
  return (
    <div className="box-border flex flex-col items-center pb-[10px] w-full">
      <NavigationItemLeft2 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">
        My flows
      </p>
    </div>
  );
}

// Flows library frame
function Frame2() {
  return (
    <div className="box-border flex flex-col items-center pb-[10px] w-full">
      <NavigationItemLeft3 />
      <p className="font-['Belfius21:Bold'] text-[14px] text-[#101416]">
        Flows library
      </p>
    </div>
  );
}

/* ----------------------
   Main Navigation Container
-----------------------*/

function MainNavigation() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Segments() {
  return (
    <div className="flex flex-col gap-[12px] w-[110px]">
      <MainNavigation />
    </div>
  );
}

/**
 * Side Navigation Component
 * Displays the main application navigation menu
 */
export function SideNavigation() {
  return (
    <div className="absolute bg-white flex flex-col h-full px-[12px] py-[35px] border-r border-[#e7ebee]">
      <Segments />
    </div>
  );
}