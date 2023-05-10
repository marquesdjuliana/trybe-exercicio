import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitPersonalForm } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função para as actions:
  handleSubmit(e) {
    e.preventDefault();
    const { history, dispatch } = this.props;
    dispatch(submitPersonalForm(this.state));
    history.push('/professional-form');
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.state;
    // console.log(this.props);
    // Verificando que usei o connect para conectar no redux: ao conectar automaticamente acesso a props -> dispatch
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="Estado: "
          name="uf"
          options={ UF_LIST }
        />
        <Button
          type="submit"
          label="Próximo"
          moreClasses="is-fullwidth is-info"
        />
      </form>
    );
  }
}

PersonalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// Aqui o essa função é desnecessária porque não preciso acessar as infos dessa página;
// const mapStateToProps = (state) => {
//   console.log(state);
// };

// Deixando o connect vazio ele só irá conectar minha aplicação ao redux;
export default connect()(PersonalForm);
