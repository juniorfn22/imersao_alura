import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
// import {Link} from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [values,setValues] = useState(valoresIniciais);

    function setValue (chave,valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(dados){
        setValue(
            dados.target.getAttribute('name'),
            dados.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(dados){
                dados.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}
            >

            <FormField
                label='Nome da Categoria'
                type='text'
                name='nome'
                value={values.nome}
                onChange={handleChange}
            />
            
            <FormField
                label='Descrição da Categoria'
                type='textarea'
                name='descricao'
                value={values.descricao}
                onChange={handleChange}
            />

            
            <FormField
                label='Cor'
                type='color'
                name='cor'
                value={values.cor}
                onChange={handleChange}
            />

            
            {/* <div>
                <label>
                    Descrição da Categoria:
                    <input  type="text" 
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Cor:
                    <input  type="color" 
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                    />
                </label>
            </div> */}
                <button >Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice)=>{
                    return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                    )
                })}
            </ul>

        </PageDefault>
    );
}

export default CadastroCategoria;