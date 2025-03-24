package br.com.vendas_api.rest.produtos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.vendas_api.model.Produto;
import br.com.vendas_api.repository.ProdutosRepository;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin("*") /* colocar apenas as urls e os dominios autorizados, usando * qualquer endereço pode acessar a API  */
/* No lugar do coringa podemos usar http://localhost:3000 para permitir o acesso da pagina NextJS  */
public class ProdutoController {
	
	@Autowired
	private ProdutosRepository produtosRepository;
	
	@PostMapping
	public ProdutoFormRequest salvar(@RequestBody ProdutoFormRequest produto) {
		
		
		Produto entidadeProduto = produto.toModel();
		
		produtosRepository.save(entidadeProduto);
		// depois de salvar produto recebe id e podemos passar os atributos para o ProdutoFormRequest
		
		return ProdutoFormRequest.fromModel(entidadeProduto);
	
	}
	
	@GetMapping
	public List<Produto> listarProdutos(){
		
		return produtosRepository.findAll();
	}

}
