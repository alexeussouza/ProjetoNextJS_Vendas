import { ReactNode } from 'react'
import { Menu } from './menu/page'; 

interface LayoutProps{
  titulo?: string;
  children?: ReactNode;
}

export const LayoutMaster: React.FC<LayoutProps> = (props: LayoutProps) =>{
  return(

    <div className="app">
      <section className="main-content columns">
        <Menu />

        <div className="container  column is-10">
          <div className="section">
            <div className="card">
              <div className="card-header border">
                <p className="card-header-title ">
                  {props.titulo}
                </p>
              </div>
              <div className="bordercard-content">
                <div className="border">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}