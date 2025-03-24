package br.com.vendas_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.vendas_api.model.Produto;

@Repository
public interface ProdutosRepository extends JpaRepository<Produto, Long>{



}
