import Link from "next/link";

export const Menu: React.FC = () =>{
  return(
      <aside className="column is-2 section">
       <p className="menu-label ">
        Minhas Vendas
      </p>
        <ul >
        <MenuItem href="/" label="Home"/>
        <MenuItem href="/cadastros/produtos" label="Cadastros"/>
        <MenuItem href="/" label="Config"/>
        <MenuItem href="/" label="Contato"/>
      </ul>  
    </aside>
  )
}

interface MenuItemProps{
  href: string;
  label: string;
 /* href?: usando a interrogação a propriedade torna-se facultativa */
}

/* Componente MenuItem não precisa ser exportado, pois será usado apenas no Menu */
const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) =>{
  return(
    <li>
      <Link href={props.href}>
          <span className="icon"></span>{props.label}
      </Link>
    </li>
  )
}