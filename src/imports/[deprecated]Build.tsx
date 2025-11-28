import svgPaths from "./svg-amvb8qcw3b";
import imgHiBelfiusLottieClose1 from "figma:asset/5ab5c2c91eb64ad8ad7c3d11891d48f6031ac882.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p6b89100} fill="var(--fill-0, #DC0078)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <NavigationItemLeft />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p399d5400} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <NavigationItemLeft1 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">New flow</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p19a51e00} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center mb-[-10px] min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
      <NavigationItemLeft2 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">My flows</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p1b4b4080} fill="var(--fill-0, #060809)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItemLeft3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center mb-[-10px] min-w-[48px] p-[8px] relative rounded-[9999px] shrink-0" data-name="navigation.itemLeft">
      <Icon3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
      <NavigationItemLeft3 />
      <p className="font-['Belfius21:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#101416] text-[14px] text-nowrap whitespace-pre">Flows library</p>
    </div>
  );
}

function MainNavigation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Main navigation">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Segments() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[110px]" data-name="Segments">
      <MainNavigation />
    </div>
  );
}

function SideNavigation() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[982px] items-start left-0 min-h-[178px] px-[12px] py-[35px] top-0" data-name="Side navigation">
      <div aria-hidden="true" className="absolute border-[#e7ebee] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Segments />
    </div>
  );
}

function Text() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">input</p>
        </div>
      </div>
    </div>
  );
}

function PaInput() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[699px] top-[151px] w-[117px]" data-name="PA-input">
      <PaInput />
    </div>
  );
}

function Text1() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Summarize</p>
        </div>
      </div>
    </div>
  );
}

function PaInput2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[871px] top-[151px] w-[117px]" data-name="PA-input">
      <PaInput2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Output</p>
        </div>
      </div>
    </div>
  );
}

function PaInput4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[1059px] top-[151px] w-[117px]" data-name="PA-input">
      <PaInput4 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-[1359px] px-[20px] py-[8px] rounded-[9999px] top-[52px]" data-name="Button">
      <div className="flex flex-col font-['Belfius21:Bold',sans-serif] justify-center leading-[0] min-h-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Done</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center left-[1241px] px-[20px] py-[8px] rounded-[9999px] top-[51px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc0078] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Belfius21:Bold',sans-serif] justify-center leading-[0] min-h-[24px] not-italic relative shrink-0 text-[#dc0078] text-[16px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Refresh</p>
      </div>
    </div>
  );
}

function ChatAvatar() {
  return (
    <div className="content-stretch flex items-start relative rounded-[9999px] shrink-0 size-[56px]" data-name="Chat Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="HI belfius LOTTIE - CLOSE+ 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHiBelfiusLottieClose1} />
      </div>
    </div>
  );
}

function PaEntry() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[207px] top-[35px] w-[364px]" data-name="PA entry">
      <ChatAvatar />
      <div className="basis-0 flex flex-col font-['Belfius21:Regular',sans-serif] grow h-[112px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[36px] text-black">
        <p className="leading-[44px]">Let’s create and make it happen</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Describe your task.</p>
        </div>
      </div>
    </div>
  );
}

function PaInput6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[144px] items-start max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text3 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[146px] items-center left-[194px] top-[250px] w-[363px]" data-name="PA-input">
      <PaInput6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Summarize</p>
        </div>
      </div>
    </div>
  );
}

function PaInput8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text4 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[183px] top-[514px] w-[117px]" data-name="PA-input">
      <PaInput8 />
    </div>
  );
}

function Text5() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Summarize</p>
        </div>
      </div>
    </div>
  );
}

function PaInput10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text5 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[183px] top-[620px] w-[117px]" data-name="PA-input">
      <PaInput10 />
    </div>
  );
}

function Text6() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Summarize</p>
        </div>
      </div>
    </div>
  );
}

function PaInput12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text6 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[183px] top-[720px] w-[117px]" data-name="PA-input">
      <PaInput12 />
    </div>
  );
}

function Text7() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Translate</p>
        </div>
      </div>
    </div>
  );
}

function PaInput14() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text7 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[310px] top-[514px] w-[118px]" data-name="PA-input">
      <PaInput14 />
    </div>
  );
}

function Text8() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Translate</p>
        </div>
      </div>
    </div>
  );
}

function PaInput16() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text8 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[310px] top-[620px] w-[118px]" data-name="PA-input">
      <PaInput16 />
    </div>
  );
}

function Text9() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Translate</p>
        </div>
      </div>
    </div>
  );
}

function PaInput18() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text9 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[310px] top-[720px] w-[118px]" data-name="PA-input">
      <PaInput18 />
    </div>
  );
}

function Text10() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Name</p>
        </div>
      </div>
    </div>
  );
}

function PaInput20() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text10 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[438px] top-[514px] w-[117px]" data-name="PA-input">
      <PaInput20 />
    </div>
  );
}

function Text11() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Name</p>
        </div>
      </div>
    </div>
  );
}

function PaInput22() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text11 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[438px] top-[620px] w-[117px]" data-name="PA-input">
      <PaInput22 />
    </div>
  );
}

function Text12() {
  return (
    <div className="max-h-[80px] min-h-[28px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center max-h-inherit min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center max-h-inherit min-h-inherit px-[16px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#41525d] text-[14px] tracking-[0.25px]">Name</p>
        </div>
      </div>
    </div>
  );
}

function PaInput24() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[144px] min-h-[92px] px-0 py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="PA-input">
      <div aria-hidden="true" className="absolute border border-[#d6dce2] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04),4px_4px_8px_0px_rgba(0,0,0,0.02),2px_2px_2px_0px_rgba(0,0,0,0.04)]" />
      <Text12 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function PaInput25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[438px] top-[720px] w-[117px]" data-name="PA-input">
      <PaInput24 />
    </div>
  );
}

export default function Build() {
  return (
    <div className="bg-white relative size-full" data-name="build">
      <SideNavigation />
      <div className="absolute bg-[#f1f0f0] h-[983px] left-[620px] top-[-1px] w-[892px]" />
      <PaInput1 />
      <PaInput3 />
      <PaInput5 />
      <Button />
      <Button1 />
      <PaEntry />
      <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[76px] justify-center leading-[0] left-[193px] not-italic text-[14px] text-black top-[189px] tracking-[0.25px] translate-y-[-50%] w-[378px]">
        <p className="leading-[20px]">{`I’m here to support you in completing your tasks and ideas. Simply use the input or drag & drop to get started.`}</p>
      </div>

      {/* Keep only Actions column header */}
      <div className="absolute flex flex-col font-['Belfius21:Bold',sans-serif] h-[32px] justify-center leading-[0] left-[261px] not-italic text-[16px] text-black top-[435px] translate-y-[-50%] w-[94px]">
        <p className="leading-[20px]">Actions</p>
      </div>

      {/* Active underline for Actions */}
      <div className="absolute h-0 left-[254px] top-[455px] w-[79px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 3">
            <line id="Line 11" stroke="var(--stroke-0, black)" strokeWidth="3" x2="79" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>

      {/* Actions panels only */}
      <PaInput15 />
      <PaInput17 />
      <PaInput19 />
    </div>
  );
}
