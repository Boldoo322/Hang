'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiGymBag,
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import {BiRestaurant , BiCoffeeTogo, BiBasketball,BiBeer, BiGasPump,BiCameraMovie} from 'react-icons/bi'
import { FaSkiing ,FaHotel, FaShoppingCart, FaGamepad, FaCocktail} from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { FiScissors } from 'react-icons/fi';
import {HiCake} from 'react-icons/hi';
import {RiHospitalLine} from 'react-icons/ri'

import CategoryBox from "../CategoryBox";
import Container from '../Container';



export const categories = [
  {
    label: 'Буудал',
    icon: MdOutlineVilla,
    description: 'This property is close to the Hotel!',
  },
  {
    label: 'Ресторан',
    icon: BiRestaurant,
    description: 'This property is has Restaurants!',
  },
  {
    label: 'Фитнес',
    icon: CgGym,
    description: 'This property is Gym!'
  },
  {
    label: 'Кофе',
    icon: BiCoffeeTogo,
    description: 'This property is in the coffeeshop!'
  },
  {
    label: 'Заал',
    icon: BiBasketball,
    description: 'This is property  Sport hall!'
  },
  {
    label: 'Дэлгүүр',
    icon: FaShoppingCart,
    description: 'This property is Super market!'
  },
  {
    label: 'Салон',
    icon: FiScissors,
    description: 'This property is near a Beauty!'
  },
  {
    label: 'Амралт',
    icon: GiForestCamp,
    description: 'This property is camping!'
  },
  {
    label: 'PC',
    icon: FaGamepad,
    description: 'This property is a Gaming!'
  },
  {
    label: 'Паб',
    icon: BiBeer,
    description: 'This property is in a Pub!'
  },
  {
    label: 'Бакери',
    icon: HiCake,
    description: 'This property offers camping Bakery!'
  },
  {
    label: 'Шатахуун',
    icon: BiGasPump,
    description: 'This property is Gas station!'
  },
  {
    label: 'Кино',
    icon: BiCameraMovie,
    description: 'This property is in the Movie!'
  },
  {
    label: 'Эмнэлэг',
    icon: RiHospitalLine,
    description: 'This property is in a Hospital!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

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
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;