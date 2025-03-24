import { httpClient } from "app/http/page"; 
import { Produto } from "app/models/produtos/page";
import { AxiosResponse } from "axios";

const resourceURL: string = "/api/produtos"

export const useProdutosService = () =>{

    const salvar = async (produto: Produto) : Promise<Produto> =>{

      const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto)
      return response.data;
    }

    return {
      salvar
    }
} 