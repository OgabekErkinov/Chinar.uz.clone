import { MenuList } from '@mui/material'


const Navbar = () => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList>
        {
          navbarItems.map((item, idx) =>  {
            return (
                
            )
          })
        }
    </MenuList>
  )
}

export default Navbar