"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollIntoView } from "@//utils/scroll-into-view";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";

export function Dropdown({ menuActive }: { menuActive: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuActive]);

  // Helper function to check if path is active
  const isPathActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <li className="hidden lg:flex items-center justify-center gap-[5px] md:gap-[10px] content-center flex-wrap">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`group relative text-theme-green outline-none flex justify-center items-center gap-[3px] md:gap-[4px]  uppercase font-poppins text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold ${isPathActive("/treatments")
                ? "text-white bg-[#036E64]"
                : "text-white hover:text-white"
              }`}
          >
            <span className="relative">
              Treatments
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <ChevronDownIcon className="w-[24px] h-[24px] lg:w-[18px] lg:h-[18px] xl:w-[24px] xl:h-[24px] aspect-square" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-white border-theme-green mt-1 min-w-[120px]"
          >
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("shampoos")}
            >
              <Link
                to="/#shampoos"
                className="font-poppins text-black hover:bg-[#036E64] hover:text-white text-[16px] p-[16px]"
              >
                All Treatments
              </Link>
            </DropdownMenuItem>
            <hr className="w-full h-[1px] border-black" />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger
                className={`text-theme-green p-[8px] hover:bg-theme-green hover:text-white capitalize font-poppins text-[16px] font-normal ${isPathActive("/shampoos")
                    ? "text-white bg-[#036E64]"
                    : "text-black group-hover:text-white"
                  }`}
              >
                Dental Crowns
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-[#036E64] hover:text-white text-[16px] p-[16px]"
                  >
                    Porcelain Crowns
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Zirconia Crowns
                  </Link>
                </DropdownMenuItem>
                <hr className="w-full h-[1px] border-black" />
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Monolithic Zirconia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    E-Max Crowns
                  </Link>
                </DropdownMenuItem>
                <hr className="w-full h-[1px] border-black" />
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Laminate Veneers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger
                className={`text-theme-green p-[8px] hover:bg-theme-green hover:text-white capitalize font-poppins text-[16px] font-normal ${isPathActive("/shampoos")
                    ? "text-white bg-[#036E64]"
                    : "text-black group-hover:text-white"
                  }`}
              >
                Dental Implants
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Full Mouth Implants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    All 4 Implants
                  </Link>
                </DropdownMenuItem>
                <hr className="w-full h-[1px] border-black" />
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    All 6 Implants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-[#036E64] hover:text-white text-[16px] p-[16px]"
                  >
                    Immediate Implants
                  </Link>
                </DropdownMenuItem>
                <hr className="w-full h-[1px] border-black" />
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-[#036E64] hover:text-white text-[16px] p-[16px]"
                  >
                    Sinus Lifting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <hr className="w-full h-[1px] border-black" />
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("shampoos")}
            >
              <Link
                to="/#shampoos"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Hollywood Simle
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("conditioner")}
            >
              <Link
                to="/#conditioner"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Root Canal
              </Link>
            </DropdownMenuItem>
            <hr className="w-full h-[1px] border-black" />
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-oil")}
            >
              <Link
                to="/#hair-oil"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Laser Teeth Whitening
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-mask")}
            >
              <Link
                to="/#hair-mask"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Tooth Filling
              </Link>
            </DropdownMenuItem>
            <hr className="w-full h-[1px] border-black" />
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-serum")}
            >
              <Link
                to="/#hair-serum"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Tooth Deep Cleaning
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={() => ScrollIntoView("tools")}>
              <Link
                to="/#tools"
                className="font-poppins text-theme-green hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Composite Bonding
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li className="flex lg:hidden w-full items-center justify-center border-b-theme-black border-b-[1px]">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`text-black outline-none flex justify-center items-center gap-[3px] py-[16px] hover:bg-theme-green hover:text-white capitalize font-poppins text-[28px] font-semibold ${isPathActive("/category")
                ? "text-white bg-theme-green"
                : "text-black hover:text-white"
              }`}
          >
            Category
            <img
              src="/header/chevron-down.svg"
              alt="chevron-down"
              width={32}
              height={32}
              className="w-[32px] h-[32px] aspect-square"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-white border-theme-green mt-1 min-w-[100px] md:min-w-[110px] lg:min-w-[130px] xl:min-w-[145px]"
          >
            {/* <DropdownMenuSub>
              <DropdownMenuSubTrigger
                className={`text-black hover:bg-theme-green hover:text-white capitalize font-poppins text-[16px] font-normal ${
                  isPathActive("/shampoos")
                    ? "text-white bg-theme-green"
                    : "text-black hover:text-white"
                }`}
              >
                Shampoos
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Adults
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Babies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  onClick={() => ScrollIntoView("shampoos")}
                >
                  <Link
                    to="/#shampoos"
                    className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
                  >
                    Kids
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub> */}
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("shampoos")}
            >
              <Link
                to="/#shampoos"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Shampoos
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("conditioner")}
            >
              <Link
                to="/#conditioner"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Conditioner
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-oil")}
            >
              <Link
                to="/#hair-oil"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Hair Oil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-mask")}
            >
              <Link
                to="/#hair-mask"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Hair Mask
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              onClick={() => ScrollIntoView("hair-serum")}
            >
              <Link
                to="/#hair-serum"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Hair Serum
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={() => ScrollIntoView("tools")}>
              <Link
                to="/#tools"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Tools
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={() => ScrollIntoView("bundles")}>
              <Link
                to="/#bundles"
                className="font-poppins text-black hover:bg-theme-green hover:text-white text-[16px] p-[16px]"
              >
                Bundles
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    </>
  );
}
