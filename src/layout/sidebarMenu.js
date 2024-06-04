
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
 const sidebarMenu = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <SpaceDashboardOutlinedIcon />
    },
    {
        name: "Products",
        path: "/products",
        icon: <Inventory2OutlinedIcon />
    },
    {
        name: "Orders",
        path: "/orders",
        icon: <ShoppingCartOutlinedIcon />
    },
    {
        name: "Categories",
        path: "/categories",
        icon: <FactCheckOutlinedIcon />
    },
] 

export default sidebarMenu