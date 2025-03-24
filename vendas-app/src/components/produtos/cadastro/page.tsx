'use client';
import { LayoutMaster } from 'components/page';
import { useState } from 'react';
import { Input } from 'components/page';
import { useProdutosService } from 'app/services/produto.service';
import { Produto } from 'app/models/produtos/page';

export const CadastroProdutos: React.FC = () => {
    
    const service = useProdutosService();

    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const submit = () => {
        const produto: Produto = {
            sku,
            preco: parseFloat(preco), /* converte propriedade em float */
            nome,
            descricao,
        };
       service.salvar(produto).then(produtoResposta => console.log(produtoResposta))
    };

    return (
        <LayoutMaster titulo="Cadastro de Produtos">
            <div className="columns">
                <Input
                    id="sku"
                    label="SKU: *"
                    columnClasses="is-half"
                    onChange={setSku}
                    value={sku}
                    placeholder="Digite o SKU do produto"
                />

                <Input
                    id="preco"
                    label="Preço: *"
                    columnClasses="is-half"
                    onChange={setPreco}
                    value={preco}
                    placeholder="Digite o preço do produto"
                />
            </div>
            <div className="columns">
                <Input
                    id="nome"
                    label="Nome: *"
                    columnClasses="is-full"
                    onChange={setNome}
                    value={nome}
                    placeholder="Digite o nome do produto"
                />
            </div>
            <div className="columns">
                <div className="field column  is-full">
                    <label className="label" htmlFor="inputDesc">
                        Descrição: *
                    </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            id="inputDesc"
                            value={descricao}
                            onChange={(event) =>
                                setDescricao(event.target.value)
                            }
                            placeholder="Digite a descrição detalhada do produto"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control is-link">
                    <button className="button is-link" onClick={submit}>
                        Salvar
                    </button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </LayoutMaster>
    );
};
