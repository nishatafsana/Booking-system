import Container from "../component/shared/Container/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./categoris";



const Categories = () => {
    return (
        
       <Container>
       <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
{
    categories.map(item=> <CategoriesBox label={item.label} icon={item.icon} key={item.label}></CategoriesBox>)
}
       </div>
       </Container>
        
    );
};

export default Categories;