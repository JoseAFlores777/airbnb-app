'use client'

import Container from "../Container";

import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import { RiRestaurantLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosTennisball } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { BiWifi } from "react-icons/bi";
import { GrTree } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { CgGym } from "react-icons/cg";
import { SiSpotify } from "react-icons/si";
import { HiFire } from "react-icons/hi";
import { GiPoolDive } from "react-icons/gi";
import { IoMdBed } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: "This property is close to the beach"
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: "This property has windmills!"
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: "This property is modern"
  },
  {
    label: 'Mountain',
    icon: FaMountain,
    description: "This property is located in the mountains"
  },
  {
    label: 'Restaurant',
    icon: RiRestaurantLine,
    description: "This property has a restaurant"
  },
  {
    label: 'Shopping',
    icon: TiShoppingCart,
    description: "This property is close to shopping areas"
  },
  {
    label: 'Tennis',
    icon: IoIosTennisball,
    description: "This property has tennis courts"
  },
  {
    label: 'Business',
    icon: FiBarChart2,
    description: "This property is suitable for business travelers"
  },
  {
    label: 'WiFi',
    icon: BiWifi,
    description: "This property has WiFi"
  },
  {
    label: 'Location',
    icon: ImLocation2,
    description: "This property has a great location"
  },
  {
    label: 'Gym',
    icon: CgGym,
    description: "This property has a gym"
  },
  {
    label: 'Music',
    icon: SiSpotify,
    description: "This property has a music system"
  },
  {
    label: 'Fireplace',
    icon: HiFire,
    description: "This property has a fireplace"
  },
  {
    label: 'Pool',
    icon: GiPoolDive,
    description: "This property has a pool"
  },
  {
    label: 'Bed',
    icon: IoMdBed,
    description: "This property has comfortable beds"
  },
  {
    label: 'Video Surveillance',
    icon: BsFillCameraVideoFill,
    description: "This property has video surveillance"
  }
];



interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({

}) => {

  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isMainPage = pathName === '/';

  if (!isMainPage) {
    return null;
  }
  
  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
            />
        ))}

      </div>
    </Container>
  )
}

export default Categories;