import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  onChange?: (valor: any) => void; /* valor opcional */
  id: string,
  label: string,
  columnClasses?: string,
  value: string,
  placeholder: string
}


/* Feito a desestruturação de props, permitindo acesso direto as variaveis. */
export const Input: React.FC<InputProps> = ({
  onChange,
  label,
  id,
  columnClasses,
  ...outrasProps
}: InputProps) =>{
  
  return(

    <div className={`field column ${columnClasses}`}>
      <label className="label" htmlFor={id}>{label}</label>
      <div className="control" >
        <input className="input" id={id} {...outrasProps}
        /* placeholder e outros campos do input são passados pela tag ...outrasProps */ 
          onChange = { event => {
              if(onChange){/* valor opcional, se houver valor chama onChange() */
                onChange(event.target.value)
              }
            }
          }
        >
          
        </input>
      </div>
          
    </div>
  )
}