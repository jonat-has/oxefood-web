import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente () {

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]

      const [value, setValue] = React.useState('this')

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={10}
                                    placeholder='Digite seu nome..'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={5}
                                    >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    label='RG'
                                    width={5}
                                >

                                </Form.Input>
                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                   
                                    label='Data Nascimento'
                                    width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        /> 
                                    </Form.Input>

                                    <Form.Input
                                 
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                   
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                 
                                    label='QTD Entregas Realizadas'
                                >
                                </Form.Input>

                                <Form.Input
                                   
                                    label='Valor por frete'
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    label='Rua'
                                    width={12}
                                >

                                </Form.Input>

                                <Form.Input
                                    label='Numero'
                                    width={4}
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    label='Bairro'
                                    width={7}
                                >

                                </Form.Input>

                                
                                <Form.Input
                                    label='Cidade'
                                    width={7}
                                >

                                </Form.Input>

                                
                                <Form.Input
                                    label='CEP'
                                    width={2}
                                >

                                </Form.Input>
                            </Form.Group>

                            <Form.Dropdown
                                label='UF'
                                placeholder=''
                                fluid
                                search
                                selection
                                options={options}
                            >

                            </Form.Dropdown>

                            <Form.Input
                                fluid
                                label='Complemento'
                            >

                            </Form.Input>

                            <Form.Group>

                                <span>Ativo:</span>

                                <Form.Checkbox
                                radio
                                label='Sim'
                                name='checkboxRadioGroup'
                                value='this'
                                checked={value === 'this'}
                                onChange={(e, data) => setValue(data.value)}
                                >

                                </Form.Checkbox>

                                <Form.Checkbox
                                 radio
                                 label='Não'
                                 name='checkboxRadioGroup'
                                 value='that'
                                 checked={value === 'that'}
                                 onChange={(e, data) => setValue(data.value)}
                                >

                                </Form.Checkbox>
                            </Form.Group>
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
